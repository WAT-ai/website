// Service Worker for aggressive caching and performance
const CACHE_NAME = 'watai-v2';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/Weblogo.png',
  '/logo.png'
];

// Resources to cache with different strategies
const CACHE_STRATEGIES = {
  // Cache First (static assets)
  CACHE_FIRST: [
    /\.(?:png|jpg|jpeg|webp|svg|gif|ico)$/,
    /\.(?:woff2|woff|ttf|otf)$/,
    /\.(?:css|js)$/
  ],
  // Network First (API calls, HTML)
  NETWORK_FIRST: [
    /\.(?:html)$/,
    /\/api\//
  ],
  // Stale While Revalidate (frequently updated resources)
  STALE_WHILE_REVALIDATE: [
    /\.(?:json)$/
  ]
};

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
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
  if (url.origin !== location.origin && !url.hostname.includes('fonts.gstatic.com')) {
    return;
  }

  // Determine cache strategy
  const pathname = url.pathname;
  let strategy = 'NETWORK_FIRST'; // default

  // Check cache strategies
  for (const [strategyName, patterns] of Object.entries(CACHE_STRATEGIES)) {
    if (patterns.some(pattern => pattern.test(pathname))) {
      strategy = strategyName;
      break;
    }
  }

  // Apply strategy
  if (strategy === 'CACHE_FIRST') {
    event.respondWith(cacheFirst(request));
  } else if (strategy === 'NETWORK_FIRST') {
    event.respondWith(networkFirst(request));
  } else if (strategy === 'STALE_WHILE_REVALIDATE') {
    event.respondWith(staleWhileRevalidate(request));
  }
});

// Cache First strategy
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.warn('Cache first failed:', error);
    return new Response('Network error', { status: 503 });
  }
}

// Network First strategy
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    return new Response('Network error', { status: 503 });
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  // Update cache in background
  const fetchPromise = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  });
  
  // Return cached version immediately if available
  if (cached) {
    return cached;
  }
  
  // Otherwise wait for network
  return fetchPromise;
}