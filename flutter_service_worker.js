'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a83f2adc61830fa9c6b46d578fdec2f5",
"assets/AssetManifest.bin.json": "7cb85357c94a7b34777e63b73ed00bd1",
"assets/AssetManifest.json": "89dd2e6a16c31744718d2776ecdbec27",
"assets/assets/animations/bb.json": "a48ea403a27168536f22ba07f5d69c80",
"assets/assets/animations/BED.json": "710e180bba304f5ecf6fd79d07d03562",
"assets/assets/animations/br.json": "8108d952ee88d6f2ad3912429f251751",
"assets/assets/animations/BRAIN.json": "12a3122867da1b9eea3a811105283555",
"assets/assets/animations/doc.json": "34bca0c5aabcb8dd75a54f7cb57fad38",
"assets/assets/animations/f.json": "04e54a94ab806236a18ee8cfdee2439b",
"assets/assets/animations/m.json": "ff5e9d5808e65c7ee11f42ed3dd309a9",
"assets/assets/animations/s.json": "80956f80e5a3faa3b2870929fb11367f",
"assets/assets/animations/sp.json": "48abf7fd830402acbdfc1ddb877f131f",
"assets/assets/animations/welcome.json": "d636c025ee2b2f1985897045adaefd7a",
"assets/assets/animations/you.json": "3a88a5036214d617b4d5367fdf472184",
"assets/assets/icons/badge.png": "7993b0f2b93cddc31133c2ca95998809",
"assets/assets/icons/doctorr.png": "3cf99b624c82968f9a706aa73175ab2f",
"assets/assets/icons/email.png": "0b0ad37ba4fbf7635f7c9f93a1076ed2",
"assets/assets/icons/forgot-password.png": "9a462f211d31a3e5e385d6da05f97f3d",
"assets/assets/icons/job-offer.png": "08db7f8fe1028122c5b458cb8d832d29",
"assets/assets/icons/patient%2520(1).png": "41431ede9cc0ece1dd1d8240a761bd35",
"assets/assets/icons/patient%2520(2).png": "f1cdd5d8c5cc468bd6489c1fb0f202fe",
"assets/assets/icons/pin.png": "554dd0c7769dd2f23a8abd86b683ce98",
"assets/assets/icons/settings%2520(1).png": "eebdc0f818abd51985770b76359ab7e9",
"assets/assets/icons/special-offer.png": "d802654ca46e8445453a925a7be66de0",
"assets/assets/images/add-user.png": "de30d0121697c3f7f2bbed42b9b06799",
"assets/assets/images/b.png": "f041d4aa844d120dffab505792b0aed8",
"assets/assets/images/bell.png": "4d47dbab4aa3dd5016036e936c9af8fe",
"assets/assets/images/book.png": "a5d554848a460252afd021026c1ba83e",
"assets/assets/images/card.png": "2b7cf7a96cfce36570eaea3e2e208fb4",
"assets/assets/images/clock.png": "73ee24276ebafae5a2ae73a490cb9a79",
"assets/assets/images/consultation.png": "b00f5d2d39449482274626763f265b0e",
"assets/assets/images/d2.png": "b8b0abf8ef504bc6276177e86a4de909",
"assets/assets/images/data.png": "6ce44d7c3c5415090d34af758b5c22ac",
"assets/assets/images/diagnosis.png": "0d029394ddf2dde8999f180f484d4b68",
"assets/assets/images/discount.png": "43cde10967f2bfba9c792364eba88afa",
"assets/assets/images/doctor.png": "b44360fd3f5fb42e998255c02c450fba",
"assets/assets/images/friendship.png": "5af55f1269aed1a5dcb1c51e41e0208e",
"assets/assets/images/google%2520copy.png": "a2229b88eeb7a5118f0a2c38b1862c58",
"assets/assets/images/google.png": "a2229b88eeb7a5118f0a2c38b1862c58",
"assets/assets/images/health-check.png": "5482d4a66afd329bec0c4893f79c083a",
"assets/assets/images/hs.png": "bb9a82bbec85b0b5c8e64fbb76e4eb7f",
"assets/assets/images/left-arrow.png": "3ea010bacce16e0ebc8efe49adcb3dcb",
"assets/assets/images/me.jpg": "a0a172edb28e010adb5299c4443745e6",
"assets/assets/images/medical-app.png": "a7aeea4ed608edf630d4ce058910c3e9",
"assets/assets/images/medical-app1.png": "bad0770c0d5489631bc8bafcf8fdc039",
"assets/assets/images/medical-team.png": "34e5448070c60f47a86951ff17e0ae01",
"assets/assets/images/need.png": "0a6e529eab8154925c9bdff70bce36ea",
"assets/assets/images/news-report.png": "6e4bfa4ac1fcd5b16799ba765fde72e0",
"assets/assets/images/news.png": "0e07551200793c0d77a71276c7301ebe",
"assets/assets/images/no-photos.png": "73eaf5dbdfaf9d6fed831bce30685a59",
"assets/assets/images/online.png": "b849145692d077e3cbfec2f0d51d7d74",
"assets/assets/images/patient.png": "c42208131307c6b451dca140bbf08ca5",
"assets/assets/images/project.png": "153ec495dfc4649e55d0093d60323ebf",
"assets/assets/images/reload.png": "7c02e5ec150a96f979a43693da583761",
"assets/assets/images/smartphone.png": "b638dff7284ae571f514bae67036eed2",
"assets/assets/images/stethoscope(1).png": "bd012dfbc681c423401cd4cd1e097ae1",
"assets/assets/images/stethoscope.png": "733bf0581832d65527a6d669c7290cde",
"assets/assets/images/stethoscope1.png": "8eb2d10105d47cf024628a53344b516b",
"assets/assets/images/student.png": "1eb55b1f9a432db0a7137152496d0b84",
"assets/assets/images/support.png": "3b796a2049131880d48ef8dc53e52702",
"assets/assets/images/svg.png": "77c748ba8ff93c6b82ac5046ac4086b3",
"assets/assets/images/talking.png": "9c1cfb3ba9a522aa431885c81a8b342b",
"assets/assets/images/telehealth.png": "73bdab5120a4d0cbe32e13fe55309696",
"assets/assets/images/welcome.png": "7ce5f301fa6838eb25764b1728973d0f",
"assets/assets/images/work-in-progress.png": "bac83cdd8250b3faa4e625a4f24618f0",
"assets/assets/images/writing.png": "537577fca4c342d2abde194b35353f40",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f7a1ce122e1a0cc167fca33ff6e5c067",
"assets/NOTICES": "e77d1aa609563f3f7ba999170c3aba79",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/webimages/asking.png": "3943a1d1ad13c04dc5a2ac49c2e652be",
"assets/webimages/booking.png": "1a043c7b316514c5249f4a6a0c3593fa",
"assets/webimages/clipboard.png": "656fba913e09757c17e0ab1daf67757f",
"assets/webimages/drugs.png": "bc5ad3bbcba04dd795ede825b04180c5",
"assets/webimages/medical-folder.png": "75689f432ca91e2ed9aa7aead139f3ef",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6f63d9323b98ce742883f5e01127863c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b9ea32e9bab91ed2b96b81342fb203b",
"/": "7b9ea32e9bab91ed2b96b81342fb203b",
"main.dart.js": "af304f10c915fd0791e9e6657b11d6d6",
"manifest.json": "3654beeddc2aa774f88be556d594c2fa",
"version.json": "a3479b14032f4174340b2ea1e8cd6ef1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
