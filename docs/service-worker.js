/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2021/01/04/test/index.html",
    "revision": "af48abc7415d1c7f52eab51ef71bf6d4"
  },
  {
    "url": "404.html",
    "revision": "57da6951d5a88b61123d6a0aacfa05dd"
  },
  {
    "url": "assets/css/0.styles.cb3ed74a.css",
    "revision": "7dc0c3f4ae5d9ffe25edb81c776a6312"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81de43f2.js",
    "revision": "5fdca9e27534b8cc698eee9c8b14383f"
  },
  {
    "url": "assets/js/11.c0465763.js",
    "revision": "c8fc0db1a6242e4ac0d82263913864de"
  },
  {
    "url": "assets/js/12.d4799f6a.js",
    "revision": "fdabf0aef730d74179ab1c6fc16ceefe"
  },
  {
    "url": "assets/js/13.6006763a.js",
    "revision": "aef1df8b36d8987bc594e046da6f6b26"
  },
  {
    "url": "assets/js/14.2685eec3.js",
    "revision": "327afdd5a41b10e3e83f0f7b63244a73"
  },
  {
    "url": "assets/js/15.0a3d1ee8.js",
    "revision": "277f1876e9fcb95a2efcb48ad651cdbb"
  },
  {
    "url": "assets/js/3.043df9ec.js",
    "revision": "fc960bd8efacfa307796835fa13adcfa"
  },
  {
    "url": "assets/js/4.685c2d35.js",
    "revision": "9a67ebbde08f9145b9506df9484176b1"
  },
  {
    "url": "assets/js/5.d433aded.js",
    "revision": "132cc818e6f8060441178847816d7bd7"
  },
  {
    "url": "assets/js/6.cd68b97b.js",
    "revision": "506b2c45c4c14bd6a0ca7293b98cc54d"
  },
  {
    "url": "assets/js/7.d8fb5184.js",
    "revision": "dc260c70daa5e60ec86d3bff32c70b76"
  },
  {
    "url": "assets/js/8.b3180b17.js",
    "revision": "d166cc71576caaf6d992df21bf78508d"
  },
  {
    "url": "assets/js/9.3c16bb8c.js",
    "revision": "3bf096cbe2aaeb3c0a448029ac4893ba"
  },
  {
    "url": "assets/js/app.f79a2002.js",
    "revision": "449d300730d1a5d6d1c2b8955a044146"
  },
  {
    "url": "assets/js/vuejs-paginate.8fe2d856.js",
    "revision": "eb5485c3285de567c0bdab8d00f4b5ad"
  },
  {
    "url": "index.html",
    "revision": "6c17d8ba069bee78c0481aee7c10d4ab"
  },
  {
    "url": "tag/index.html",
    "revision": "36791bb79c97c2856dd9acb0d7b74005"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "309e7236a46df41fbf3d410dfb2ea33d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
