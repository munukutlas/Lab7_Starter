// sw.js - This file needs to be in the root of the directory to work,
//         so do not move it next to the other scripts

const CACHE_NAME = 'lab-7-starter';

// Once the service worker has been installed, feed it some initial URLs to cache
self.addEventListener('install', function (event) {
  /**
   * TODO - Part 2 Step 2
   * Create a function as outlined above
   */

   var urlsToCache = [
     '/',
     '/assets/scripts/main.js',
     '/assets/scripts/Router.js'
   ]

   event.waitUntil(
     caches.open(CACHE_NAME)
     .then(function(cache) {
       console.log('opened cache');
       return cache.addAll(urlsToCache);
     })
   );

});

/**
 * Once the service worker 'activates', this makes it so clients loaded
 * in the same scope do not need to be reloaded before their fetches will
 * go through this service worker
 */
self.addEventListener('activate', function (event) {
  /**
   * TODO - Part 2 Step 3
   * Create a function as outlined above, it should be one line
   */
  event.waitUntil(clients.claim());
});

// Intercept fetch requests and store them in the cache
self.addEventListener('fetch', function (event) {
  /**
   * TODO - Part 2 Step 4
   * Create a function as outlined above
   */
  
   var responseToCache = response.clone();

   caches.open(CACHE_NAME)
   .then(function(cache) {
     cache.put(event.request, responseToCache);
   });

});