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
    "revision": "db374ff2fbfad9724703b59f61469ac0"
  },
  {
    "url": "2024/07/22/golang-misc-2/index.html",
    "revision": "270d16a16643aa3387a0a7bac5e983fc"
  },
  {
    "url": "404.html",
    "revision": "5ee0abeda7bc26625bf6bdf2216e6945"
  },
  {
    "url": "assets/css/0.styles.78e3a5f8.css",
    "revision": "6c37febf9c4654f0a0b6772aabd4d225"
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
    "url": "assets/js/14.225b6828.js",
    "revision": "667569c7aeda1e4b6f2a75da22650015"
  },
  {
    "url": "assets/js/15.36d720c8.js",
    "revision": "0d6a061580a0de771fdeb063a5b9e4ce"
  },
  {
    "url": "assets/js/16.bcdd9323.js",
    "revision": "de74cb6ece4b2a3cc91419ca1b0209d9"
  },
  {
    "url": "assets/js/3.d778d637.js",
    "revision": "93faf87e77d3439b1bc321f4a1132862"
  },
  {
    "url": "assets/js/4.9dd284b2.js",
    "revision": "d90b2072fe1733d1f72dc01ff7499be1"
  },
  {
    "url": "assets/js/5.70d6962b.js",
    "revision": "e00f4a16de7325c526a53c4711d29840"
  },
  {
    "url": "assets/js/6.83ff4fa4.js",
    "revision": "28437345cad53492af10c0a5a02931e1"
  },
  {
    "url": "assets/js/7.3763ae97.js",
    "revision": "ce082e0b45a101b8004d77c285b21ac2"
  },
  {
    "url": "assets/js/8.2f296b02.js",
    "revision": "1a447a603ad76ef04da11898bbae9dfe"
  },
  {
    "url": "assets/js/9.9429998b.js",
    "revision": "18b566211b3a19b0dc36478a1ff5ea1f"
  },
  {
    "url": "assets/js/app.0c6d2895.js",
    "revision": "4b55d900c79c0d67f8a394639b2194d3"
  },
  {
    "url": "assets/js/vuejs-paginate.55b38529.js",
    "revision": "1978d873978f6146869a76d73c9e1018"
  },
  {
    "url": "index.html",
    "revision": "31041d1e6b24e0f25d87a108831896a4"
  },
  {
    "url": "tag/Go/index.html",
    "revision": "d5b09fd285708d6a2a5a1c454abaebc1"
  },
  {
    "url": "tag/index.html",
    "revision": "f1924ca6dd5f84cb6f8ca2d469cf8088"
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
