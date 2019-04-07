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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dcb756245274e9e967c2b4f099b96f4c"
  },
  {
    "url": "assets/css/10.styles.c0d91967.css",
    "revision": "ce11e46455d60eac20a85267d20d2ed3"
  },
  {
    "url": "assets/css/11.styles.8ac14268.css",
    "revision": "6afc6537125435fdcd1be0f8dc9e8084"
  },
  {
    "url": "assets/css/12.styles.5b848627.css",
    "revision": "c73a44f629395ade3e8f72999573d036"
  },
  {
    "url": "assets/css/13.styles.f6f2e3a5.css",
    "revision": "a43c3c3582f8fe5f144214771acbaf4d"
  },
  {
    "url": "assets/css/2.styles.5393b2ce.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/3.styles.11bc5e98.css",
    "revision": "832ba32c7535e29714aa79e9c1450c4a"
  },
  {
    "url": "assets/css/4.styles.a956ce9e.css",
    "revision": "e2bd3cebec333ccdf448d44bafce54be"
  },
  {
    "url": "assets/css/5.styles.cc181a14.css",
    "revision": "1fe3acfa3cee134adba8b1a7ecf1c18b"
  },
  {
    "url": "assets/css/6.styles.decb6230.css",
    "revision": "366e448191d778b3cea6d72985e005d4"
  },
  {
    "url": "assets/css/7.styles.57865660.css",
    "revision": "6fcbda9a8c996166ccfa356d4bc79543"
  },
  {
    "url": "assets/css/8.styles.ae2cd045.css",
    "revision": "bc89e817d984e1474990fa9f64191c91"
  },
  {
    "url": "assets/css/9.styles.3ed33575.css",
    "revision": "b15896a54255847ad622a92a530aad24"
  },
  {
    "url": "assets/css/styles.8def954c.css",
    "revision": "0774c0c692b549b0b6aa1fc72c6ca3dc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.99b886c4.js",
    "revision": "d11ed731cb62fd3e6d8df648b7f530fb"
  },
  {
    "url": "assets/js/10.c0d91967.js",
    "revision": "c7ac538237ac4dbcbff036208e9a0f1b"
  },
  {
    "url": "assets/js/11.8ac14268.js",
    "revision": "17225e5854cd8cc654dd8eeb0408284e"
  },
  {
    "url": "assets/js/12.5b848627.js",
    "revision": "010942a433a4a453fda39fcafca0f6ea"
  },
  {
    "url": "assets/js/13.f6f2e3a5.js",
    "revision": "faa284f4393ccfb8b798c231928ddd77"
  },
  {
    "url": "assets/js/14.6b8f2c61.js",
    "revision": "f4471deeaaeb63e7277ebeb25d02eefd"
  },
  {
    "url": "assets/js/15.aeecaa67.js",
    "revision": "2d2943f1f7a8fb5b863af1291fc352b7"
  },
  {
    "url": "assets/js/16.e1d9fe4d.js",
    "revision": "a1485be0ddc34d3af21ee974f3808eef"
  },
  {
    "url": "assets/js/17.7dfc374c.js",
    "revision": "7ac7c28eb005d3be2bec9aaefa0f609a"
  },
  {
    "url": "assets/js/18.251bc544.js",
    "revision": "c6712b683cf6cef9d2ffc741515aa2bf"
  },
  {
    "url": "assets/js/19.1aee1006.js",
    "revision": "ff6d41f8a3e667a809beebbb8436429b"
  },
  {
    "url": "assets/js/2.5393b2ce.js",
    "revision": "bc3ed9cb98cd59c6902f0f4fa30499ec"
  },
  {
    "url": "assets/js/20.0c6a3854.js",
    "revision": "1d1870c823c7b03344bfa74b21ddd21f"
  },
  {
    "url": "assets/js/21.27969d51.js",
    "revision": "4bfdce2ddfe4f89f2bfbda947f7becde"
  },
  {
    "url": "assets/js/22.d1e86c66.js",
    "revision": "ab49adb38f312f08feeec5779fb19c2f"
  },
  {
    "url": "assets/js/23.b611067d.js",
    "revision": "7f3debc828043fefecdfce9deaf79243"
  },
  {
    "url": "assets/js/24.bfaef9c0.js",
    "revision": "34343959f7d085a1d0feffd99b645f07"
  },
  {
    "url": "assets/js/25.00f9a37d.js",
    "revision": "1dd3bb59273928491bee87fe23ec1799"
  },
  {
    "url": "assets/js/26.a8edfd16.js",
    "revision": "62776a660cf340c4b3d447c348afd57d"
  },
  {
    "url": "assets/js/27.8ec0fe8c.js",
    "revision": "7f2b56ebf0396d431fcbf205704c917f"
  },
  {
    "url": "assets/js/28.000f65bc.js",
    "revision": "ab95d5dd712148339626974ebd332560"
  },
  {
    "url": "assets/js/29.300f911f.js",
    "revision": "72678b634928497802f75e4b0fd9d44a"
  },
  {
    "url": "assets/js/3.11bc5e98.js",
    "revision": "9134e67e3abed60cf3bca99dbe3e0046"
  },
  {
    "url": "assets/js/30.9ffb28f6.js",
    "revision": "03d9b525f2b3e98817f9485a7e7896a9"
  },
  {
    "url": "assets/js/31.8638a9a8.js",
    "revision": "035381a17c772323e6714f48f5e61108"
  },
  {
    "url": "assets/js/32.d1a16cf3.js",
    "revision": "79d54e0dd651fd00fe735dd9258f4a24"
  },
  {
    "url": "assets/js/33.e585412d.js",
    "revision": "2d0c7d2fb8ac88fde71044303f6ea0d4"
  },
  {
    "url": "assets/js/4.a956ce9e.js",
    "revision": "5e62c096ec139a0fc5517ebb16549114"
  },
  {
    "url": "assets/js/5.cc181a14.js",
    "revision": "51b4df5e6e7cbec6ccdd54375f8fe7bd"
  },
  {
    "url": "assets/js/6.decb6230.js",
    "revision": "320f9a6d90be2a02e4f9306a0d9db3bc"
  },
  {
    "url": "assets/js/7.57865660.js",
    "revision": "578aa5569dc334a4cd8201e718a0cbfc"
  },
  {
    "url": "assets/js/8.ae2cd045.js",
    "revision": "f6cd68b31234b40862f402fbd2f86962"
  },
  {
    "url": "assets/js/9.3ed33575.js",
    "revision": "73cbbd3df5b53f878667630873cf16e9"
  },
  {
    "url": "assets/js/app.8def954c.js",
    "revision": "b6452cd1713c773bb11602a14c05c8f3"
  },
  {
    "url": "boa/index.html",
    "revision": "b951241691f4086bd05121ac95333602"
  },
  {
    "url": "bom-translation/index.html",
    "revision": "a51d331e617e0073e463d8e74b30cb00"
  },
  {
    "url": "bom/index.html",
    "revision": "13aaca21437df46b6b02eb89d6026b6b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7e67284809c048fbd02df1ed3fb4deda"
  },
  {
    "url": "dedication/index.html",
    "revision": "10cc297296a980136d4bcc4e882ad1e4"
  },
  {
    "url": "epilogue/index.html",
    "revision": "3b7efa8813d0f5c7db16cfe2d3907913"
  },
  {
    "url": "first-vision/index.html",
    "revision": "dd7c23db8853d4790223ea2fba036b59"
  },
  {
    "url": "images/boa-facsimile-1-actual.jpg",
    "revision": "4c63403ca4e0d4ffacc3cff960635085"
  },
  {
    "url": "images/boa-facsimile-1-anubis.jpg",
    "revision": "d2355b15859350247faf45822005422c"
  },
  {
    "url": "images/boa-facsimile-1-compare.jpg",
    "revision": "f992c66666cf68cd88a3cac3e97020df"
  },
  {
    "url": "images/boa-facsimile-1.jpg",
    "revision": "5e05e7152d7358c1488237694ec23afb"
  },
  {
    "url": "images/boa-facsimile-2.jpg",
    "revision": "5bff7fc6ae710f70f83ac299d670dc2c"
  },
  {
    "url": "images/boa-facsimile-3.jpg",
    "revision": "9de90d8df9221adb23b04e4aac17df7e"
  },
  {
    "url": "images/bom-camora.jpg",
    "revision": "243872b79f607fd5140c5a70e9ddb363"
  },
  {
    "url": "images/bom-geography.jpg",
    "revision": "14a1f61cdea9cff751e14ab3206fceff"
  },
  {
    "url": "images/bom-joseph-smith-geography.jpg",
    "revision": "9e8c13e8b2f5a364a7b26db968164f6f"
  },
  {
    "url": "images/bom-translation-actual.jpg",
    "revision": "fd2b4b62afb19b4bfb7c2de267b21d69"
  },
  {
    "url": "images/bom-translation-portrayals.jpg",
    "revision": "e1b00cfcb2b46e104f65867b05ade971"
  },
  {
    "url": "images/j-reuben-clark.jpg",
    "revision": "11bde8206b6f0edf38e6474dabfb9296"
  },
  {
    "url": "images/kinderhook-ancient-records.jpg",
    "revision": "4d29758a2c38cb08bcabd8c93544ce92"
  },
  {
    "url": "images/kinderhook-facsimile.jpg",
    "revision": "651e759289f1dfcad25c9abda951f9cd"
  },
  {
    "url": "images/other-temple.jpg",
    "revision": "184de842a48bf8b3a25421fcf3ed10a3"
  },
  {
    "url": "images/polygamy-joseph-smith-polygamy.jpg",
    "revision": "f104c3b99b3385a16b3bfc5e6ae07846"
  },
  {
    "url": "images/polygamy-joseph-vs-warren.jpg",
    "revision": "f184b75b1689ba391f70cc9476845806"
  },
  {
    "url": "images/prophets-mark-hoffman.jpg",
    "revision": "6d7ef5cd77ee4aa336ac472d6a8fb43e"
  },
  {
    "url": "images/temples-masonic-handshake.jpg",
    "revision": "fb31c9c551bbfc76d9d8bf63fdd34c97"
  },
  {
    "url": "images/witnesses-book-of-the-law.jpg",
    "revision": "739ce67caa02c9eb1adbd7aa8daf44c6"
  },
  {
    "url": "images/witnesses-david-whitmer.jpg",
    "revision": "7c0a3eab3399325c6e286f02b7e18a2a"
  },
  {
    "url": "images/witnesses-james-strang.jpg",
    "revision": "213767bcbc2e67af7e5590446eadfe3f"
  },
  {
    "url": "images/witnesses-magical-worldview.jpg",
    "revision": "fb363b081ca2e1b534a1dc3f20bf3b7c"
  },
  {
    "url": "images/witnesses-martin-harris.jpg",
    "revision": "92ea2a268cc95c16e31d7b153fc219ce"
  },
  {
    "url": "images/witnesses-oliver-cowdery.jpg",
    "revision": "99fb75141ef03ec322df57f1394e35fe"
  },
  {
    "url": "images/witnesses-plates-hat.jpg",
    "revision": "e973be4fc5fb17da27d9800c0ec2f147"
  },
  {
    "url": "images/witnesses-shakers.jpg",
    "revision": "7e322ef8ba527d150bbd16d5f76e7780"
  },
  {
    "url": "images/witnesses-signatures.jpg",
    "revision": "a32c68a164277b8e9db05b84cc09b5af"
  },
  {
    "url": "images/witnesses-voree-plates-facsimile.jpg",
    "revision": "19a2dfb5605208a1295396b82c19fa27"
  },
  {
    "url": "index.html",
    "revision": "abc14ecb797960fd9a218007939b2d58"
  },
  {
    "url": "introduction/index.html",
    "revision": "8d2a4a0c702a43ca5463322aa33d297a"
  },
  {
    "url": "kinderhook/index.html",
    "revision": "457f2fc9e382f6794831c3e90228780d"
  },
  {
    "url": "other/index.html",
    "revision": "55c4d6e31d406e4c184f71277549cd2d"
  },
  {
    "url": "polygamy/index.html",
    "revision": "9da30c07adf1b340ca7687193e0d05aa"
  },
  {
    "url": "preface/index.html",
    "revision": "31f56111863376c2fa42dcf2c1b01df3"
  },
  {
    "url": "priesthood/index.html",
    "revision": "eb8053d8e634dd724a4edecb126a2d99"
  },
  {
    "url": "prophets/index.html",
    "revision": "84825e09596964fc456f8e0074e7d55a"
  },
  {
    "url": "science/index.html",
    "revision": "9fbed93959354fb7572d10f6b449f2a2"
  },
  {
    "url": "temples/index.html",
    "revision": "cf7a937cbb0bbc93ec36661f92284375"
  },
  {
    "url": "testimony/index.html",
    "revision": "2064985418430778a3ff428a6c7ac99f"
  },
  {
    "url": "witnesses/index.html",
    "revision": "6411e7f55ebdc16e21f0d49cc9bb33d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
