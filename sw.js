// Service Worker for aggressive caching on GitHub Pages
const CACHE_NAME = 'watai-v3';
const STATIC_CACHE_NAME = 'watai-static-v3';
const DYNAMIC_CACHE_NAME = 'watai-dynamic-v3';

// Critical assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/Weblogo.png',
  '/logo.png',
  '/robots.txt'
];

// Cache strategies by resource type
const CACHE_STRATEGIES = {
  // Cache First with long TTL - static assets that rarely change
  CACHE_FIRST_LONG: {
    patterns: [
      /\.(?:png|jpg|jpeg|webp|svg|gif|ico)$/,
      /\.(?:woff2|woff|ttf|otf)$/,
      /\/static\/.*\.(?:css|js)$/,
      /slider3_opt.*\.png/,
      /.*_opt\.(?:png|jpg|jpeg|webp)$/
    ],
    cacheName: STATIC_CACHE_NAME,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 100
  },
  
  // Cache First with medium TTL - other static resources
  CACHE_FIRST_MEDIUM: {
    patterns: [
      /\.(?:css|js)$/,
      /\/logo\.png$/,
      /\/Weblogo\.png$/
    ],
    cacheName: STATIC_CACHE_NAME,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxEntries: 50
  },
  
  // Network First - HTML and API calls
  NETWORK_FIRST: {
    patterns: [
      /\.(?:html)$/,
      /\/api\//,
      /\/$/
    ],
    cacheName: DYNAMIC_CACHE_NAME,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    maxEntries: 20
  }
};

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.command === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME),
      caches.open(DYNAMIC_CACHE_NAME)
    ]).then(([staticCache, dynamicCache]) => {
      return staticCache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheName.startsWith('watai-') || 
              (!cacheName.includes('v3') && cacheName.startsWith('watai-'))) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - smart caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests (except fonts)
  if (url.origin !== location.origin && 
      !url.hostname.includes('fonts.gstatic.com') &&
      !url.hostname.includes('fonts.googleapis.com')) {
    return;
  }

  // Determine cache strategy
  let strategy = findCacheStrategy(url.pathname + url.search);
  
  if (strategy) {
    if (strategy.patterns.some(pattern => pattern.test(request.url))) {
      if (strategy === CACHE_STRATEGIES.NETWORK_FIRST) {
        event.respondWith(networkFirst(request, strategy));
      } else {
        event.respondWith(cacheFirst(request, strategy));
      }
    }
  }
});

// Find appropriate cache strategy
function findCacheStrategy(url) {
  for (const [name, strategy] of Object.entries(CACHE_STRATEGIES)) {
    if (strategy.patterns.some(pattern => pattern.test(url))) {
      return strategy;
    }
  }
  return null;
}

// Cache First strategy with TTL
async function cacheFirst(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cached = await cache.match(request);
  
  // Check if cached response is still valid
  if (cached) {
    const cachedDate = new Date(cached.headers.get('sw-cache-time') || 0);
    const now = new Date();
    
    if (now - cachedDate < strategy.maxAge) {
      return cached;
    }
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      // Clone response and add cache timestamp
      const responseClone = response.clone();
      const responseWithTime = new Response(responseClone.body, {
        status: responseClone.status,
        statusText: responseClone.statusText,
        headers: {
          ...Object.fromEntries(responseClone.headers.entries()),
          'sw-cache-time': new Date().toISOString()
        }
      });
      
      // Clean up old entries if needed
      await cleanupCache(cache, strategy.maxEntries);
      
      // Cache the response
      await cache.put(request, responseWithTime);
    }
    return response;
  } catch (error) {
    // Return cached version if available, even if expired
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Network First strategy
async function networkFirst(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const responseClone = response.clone();
      const responseWithTime = new Response(responseClone.body, {
        status: responseClone.status,
        statusText: responseClone.statusText,
        headers: {
          ...Object.fromEntries(responseClone.headers.entries()),
          'sw-cache-time': new Date().toISOString()
        }
      });
      
      await cleanupCache(cache, strategy.maxEntries);
      await cache.put(request, responseWithTime);
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Clean up old cache entries
async function cleanupCache(cache, maxEntries) {
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    const oldestKeys = keys.slice(0, keys.length - maxEntries);
    await Promise.all(oldestKeys.map(key => cache.delete(key)));
  }
}