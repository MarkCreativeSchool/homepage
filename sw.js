importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0eeb42ee9fae432d986e.js",
    "revision": "ac98b2bc5e049ea3e48c27b58dcd7102"
  },
  {
    "url": "/_nuxt/1949180955ccf2baa476.js",
    "revision": "206c60068ad38892a8d0362ae57b2735"
  },
  {
    "url": "/_nuxt/2d3f30c38f9af9c249ee.js",
    "revision": "bd39b7dec627151aa32b380771db07fe"
  },
  {
    "url": "/_nuxt/3743ed7565e69707b5de.js",
    "revision": "abdaf0c5ca66e0d461b98f389d0c37b4"
  },
  {
    "url": "/_nuxt/635eaa0f357aa8618771.js",
    "revision": "db6d39312b800a3280cabe59a37d6c70"
  },
  {
    "url": "/_nuxt/6f48c2c1a143db741686.js",
    "revision": "3634a2d54f098f1be9027acff6eba9a2"
  }
], {
  "cacheId": "homepage",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
