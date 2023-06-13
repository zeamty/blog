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
    "url": "2023/06/12/golang-misc/index.html",
    "revision": "c8c79c5b500aaec945b9fed4946236bb"
  },
  {
    "url": "404.html",
    "revision": "47b9e6f8483549b8795c2beeba600172"
  },
  {
    "url": "assets/css/0.styles.5f60fb72.css",
    "revision": "c46eda9e5a5d8e8c1d586196a2c99121"
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
    "url": "assets/js/10.c8d75ead.js",
    "revision": "99eb62a8e723082a925e5cd3667bbf5b"
  },
  {
    "url": "assets/js/11.f3c09a77.js",
    "revision": "8835b5ef5648d644810376dd277023be"
  },
  {
    "url": "assets/js/12.e57088b4.js",
    "revision": "a68cb525dd8523f9183ebfe27c0f6cb5"
  },
  {
    "url": "assets/js/13.ab5b731e.js",
    "revision": "b71a67834219f24b490d69ef8e14ce26"
  },
  {
    "url": "assets/js/14.a31fae44.js",
    "revision": "c94618bcff644db39821d9da7b7131aa"
  },
  {
    "url": "assets/js/15.9c14f64c.js",
    "revision": "f1a699dbb9417d5533c1cd351416da55"
  },
  {
    "url": "assets/js/3.d778d637.js",
    "revision": "93faf87e77d3439b1bc321f4a1132862"
  },
  {
    "url": "assets/js/4.c436be85.js",
    "revision": "e82cfa8338c1a3737bfa2e5ae0b960bb"
  },
  {
    "url": "assets/js/5.70d6962b.js",
    "revision": "e00f4a16de7325c526a53c4711d29840"
  },
  {
    "url": "assets/js/6.d22056b0.js",
    "revision": "e39bfff95092083f36516e55897c1e37"
  },
  {
    "url": "assets/js/7.3763ae97.js",
    "revision": "ce082e0b45a101b8004d77c285b21ac2"
  },
  {
    "url": "assets/js/8.7da5c745.js",
    "revision": "d09e672612416517caaa2306d353d5e2"
  },
  {
    "url": "assets/js/9.f0acb5f9.js",
    "revision": "93b09b7167098a3269df264c11f6017a"
  },
  {
    "url": "assets/js/app.b4b78d7c.js",
    "revision": "3c083f877b0e8410912d3be621b3a6c1"
  },
  {
    "url": "assets/js/vuejs-paginate.55b38529.js",
    "revision": "1978d873978f6146869a76d73c9e1018"
  },
  {
    "url": "index.html",
    "revision": "90ef33b4e255e07412aff4a0eb4aa5f2"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "eea401c816fb8036cd23a8923507cb72"
  },
  {
    "url": "tag/index.html",
    "revision": "977dbad70fc58de9b49cc4c23fc49dcd"
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
