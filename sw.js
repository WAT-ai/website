/**
 * WAT.ai Service Worker - Advanced Caching Strategy
 * 
 * Implements aggressive caching to bypass GitHub Pages' default 10-minute cache TTL
 * and provide near-instant loading for returning visitors. Uses dual cache strategy:
 * - Static assets (images, fonts, CSS, JS) cached indefinitely
 * - Dynamic content (HTML, API responses) cached with network-first strategy
 *
 */

const CACHE_NAME = 'watai-cache-v5';          // Main cache for dynamic content
const STATIC_CACHE_NAME = 'watai-static-v5'; // Long-term cache for static assets

console.log('SW: Service Worker loaded and ready');

/**
 * Install Event Handler
 * Activates immediately without waiting for existing service workers to close
 * This ensures users get the latest version without needing to refresh twice
 */
self.addEventListener('install', (event) => {
  console.log('SW: Installing new service worker version...');
  // Skip waiting phase to activate immediately
  self.skipWaiting();
});

/**
 * Activate Event Handler
 * Cleans up old cache versions and takes control of all clients immediately
 * This ensures consistent caching behavior across all open tabs
 */
self.addEventListener('activate', (event) => {
  console.log('SW: Activating and cleaning up old caches...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete outdated cache versions to free up storage
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
            console.log('SW: Deleting outdated cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('SW: Taking control of all clients');
      // Immediately control all open tabs without waiting for reload
      return self.clients.claim();
    })
  );
});

/**
 * Static Asset Detection
 * Identifies static resources that should be cached long-term
 * These assets rarely change and benefit from aggressive caching
 * 
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is for a static asset
 */
function isStaticAsset(url) {
  return url.includes('/static/') || 
         url.match(/\.(css|js|png|jpg|jpeg|webp|svg|gif|ico|woff2|woff|map)$/i) ||
         url.includes('logo') ||
         url.includes('manifest.json') ||
         url.includes('robots.txt') ||
         url.includes('fonts.googleapis.com') ||
         url.includes('fonts.gstatic.com');
}

/**
 * Fetch Event Handler - Dual Caching Strategy
 * 
 * Static Assets: Cache-first strategy for maximum performance
 * - Serve from cache immediately if available
 * - Cache indefinitely as these rarely change
 * 
 * Dynamic Content: Network-first with cache fallback
 * - Always try network first for fresh content
 * - Fall back to cache if network fails (offline support)
 * - Cache successful responses for future use
 */
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Skip non-GET requests (POST, PUT, DELETE, etc.)
  if (event.request.method !== 'GET') return;
  
  // Skip Chrome extension and other non-http requests
  if (!url.startsWith('http')) return;
  
  console.log('SW: Processing request for:', url);
  
  event.respondWith(
    caches.open(isStaticAsset(url) ? STATIC_CACHE_NAME : CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        
        // Static assets: Serve from cache immediately (cache-first strategy)
        if (cachedResponse && isStaticAsset(url)) {
          console.log('SW: Serving static asset from cache:', url);
          return cachedResponse;
        }
        
        // Dynamic content: Network-first with cache fallback
        return fetch(event.request).then(networkResponse => {
          // Only cache successful responses to avoid caching errors
          if (networkResponse && networkResponse.status === 200) {
            console.log('SW: Caching successful response for:', url);
            // Clone the response because it can only be consumed once
            const responseToCache = networkResponse.clone();
            cache.put(event.request, responseToCache);
          }
          return networkResponse;
        }).catch(error => {
          console.log('SW: Network failed, attempting cache fallback for:', url);
          // Network failed - return cached version if available (offline support)
          if (cachedResponse) {
            console.log('SW: Serving cached fallback for:', url);
            return cachedResponse;
          }
          // No cache available - propagate the error
          throw error;
        });
      });
    }).catch(error => {
      console.error('SW: Cache operation failed for:', url, error);
      // Fallback to direct network request if cache operations fail
      return fetch(event.request);
    })
  );
});