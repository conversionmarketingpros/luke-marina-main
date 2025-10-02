// Service Worker Cleanup - This service worker unregisters itself and clears all caches
// This fixes the "site temporarily down" issue caused by aggressive caching

console.log('🗑️ Marina Service Worker - CLEANUP MODE - Unregistering and clearing caches...')

// Install event - Skip waiting immediately
self.addEventListener('install', (event) => {
  console.log('🗑️ Cleanup Service Worker installing - will remove all caches')
  event.waitUntil(self.skipWaiting())
})

// Activate event - Delete ALL caches and unregister
self.addEventListener('activate', (event) => {
  console.log('🗑️ Cleanup Service Worker activating - deleting ALL caches...')
  
  event.waitUntil(
    Promise.all([
      // Delete ALL caches
      caches.keys().then((cacheNames) => {
        console.log('Found caches to delete:', cacheNames)
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log('🗑️ Deleting cache:', cacheName)
            return caches.delete(cacheName)
          })
        )
      }),
      // Take control of all clients
      self.clients.claim()
    ]).then(() => {
      console.log('✅ All caches deleted successfully')
      
      // Notify all clients that caches are cleared
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'CACHES_CLEARED',
            message: 'All caches have been cleared. Please refresh the page.'
          })
        })
      })
    }).then(() => {
      // Unregister this service worker after cleanup
      console.log('🗑️ Unregistering service worker...')
      return self.registration.unregister()
    }).then(() => {
      console.log('✅ Service worker unregistered successfully')
    }).catch((error) => {
      console.error('❌ Error during cleanup:', error)
    })
  )
})

// Fetch event - Pass through all requests (no caching)
self.addEventListener('fetch', (event) => {
  // Simply pass through to network, no caching
  event.respondWith(fetch(event.request))
})

console.log('🗑️ Cleanup Service Worker loaded - will clear all caches and unregister')