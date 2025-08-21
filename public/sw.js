/**
 * WAT.ai Service Worker - Image Assets Only Caching
 * 
 * Caches only static assets like images that rarely change
 * Code files (JS, CSS) and HTML always come fresh from network
 *
 */

const ASSETS_CACHE_NAME = 'watai-assets-v7'; // Cache for images and static assets only

console.log('SW: Service Worker loaded - Images only caching enabled');

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
          // Delete all cache versions except current assets cache
          if (cacheName !== ASSETS_CACHE_NAME) {
            console.log('SW: Deleting cache:', cacheName);
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
 * Only images and fonts that rarely change - NO CODE FILES
 * 
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is for a cacheable static asset
 */
function isStaticAsset(url) {
  return url.match(/\.(png|jpg|jpeg|webp|svg|gif|ico|woff2|woff)$/i) ||
         url.includes('logo') ||
         url.includes('fonts.googleapis.com') ||
         url.includes('fonts.gstatic.com');
}

/**
 * Fetch Event Handler - Images Only Caching
 * 
 * Images & Fonts: Cache-first strategy for performance
 * Everything Else: Always fetch fresh from network
 */
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Skip non-GET requests (POST, PUT, DELETE, etc.)
  if (event.request.method !== 'GET') return;
  
  // Skip Chrome extension and other non-http requests
  if (!url.startsWith('http')) return;
  
  // Only cache images and fonts, let everything else go through normally
  if (isStaticAsset(url)) {
    console.log('SW: Processing static asset:', url);
    event.respondWith(
      caches.open(ASSETS_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          // Serve from cache if available
          if (cachedResponse) {
            console.log('SW: Serving from cache:', url);
            return cachedResponse;
          }
          
          // Not in cache, fetch and cache it
          return fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              console.log('SW: Caching asset:', url);
              const responseToCache = networkResponse.clone();
              cache.put(event.request, responseToCache);
            }
            return networkResponse;
          });
        });
      })
    );
  } else {
    // For code files, HTML, CSS, JS, etc. - let them go through normally (no caching)
    console.log('SW: Passing through (no cache):', url);
  }
});