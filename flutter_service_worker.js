'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "16baa96d3a6a1cfca18088929c152f28",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f24b12c4da4e0165446ed211ef074400",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7fcc70f722fc4979a956b2cf4f46fabe",
".git/logs/refs/heads/master": "7fcc70f722fc4979a956b2cf4f46fabe",
".git/logs/refs/remotes/origin/HEAD": "7fcc70f722fc4979a956b2cf4f46fabe",
".git/objects/pack/pack-270a012eb79752e1d1485190fbe45cc05ea1c1e6.idx": "c014e9da320d6adef7ea0f1bb15092da",
".git/objects/pack/pack-270a012eb79752e1d1485190fbe45cc05ea1c1e6.pack": "8036293af0977b6e69491b96d6bd7d1a",
".git/packed-refs": "e788f10dbc312a94228a7833949fd286",
".git/refs/heads/master": "060c9126313e68ca9a25dba89e1e723e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/asset/image/github.png": "91caccae069808f2b2ad913da20b15ac",
"assets/asset/image/house.png": "423e3322b4b457f057009a23402539e3",
"assets/asset/image/id-card.png": "d007f9c2be4bc08eaa5e77baf8e3375b",
"assets/asset/image/linkedin.png": "f53c4c9b041001471a7a447872a09ce6",
"assets/asset/image/matrix2.gif": "a4b28c9b621dc8c59c4e51f1ee26e183",
"assets/asset/image/message.png": "82304a4a4bde2325b2e1822dc0eea21e",
"assets/asset/image/stack-overflow.png": "a27a6b82af35ab57702c0725a719e429",
"assets/asset/image/twitter.png": "08d274bcaf71630fe630dce7373e3fde",
"assets/asset/image/web-browser.png": "00334afbe46eb9ea78820b9e13a1addc",
"assets/asset/lottie/developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/AssetManifest.json": "52e28db52007ba3eb8ac5e6fd2b5cc45",
"assets/assets/articles/hello.md": "30126ea863a168272b147c5112fd0cbb",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/image/algorithm/addtostring.png": "b602d09552b28ce80bb307e22c9b82a9",
"assets/assets/image/backgroundImage.jpg": "24b60fe44ee3db1f5d4f977dac290ec0",
"assets/assets/image/github.png": "91caccae069808f2b2ad913da20b15ac",
"assets/assets/image/house.png": "423e3322b4b457f057009a23402539e3",
"assets/assets/image/id-card.png": "d007f9c2be4bc08eaa5e77baf8e3375b",
"assets/assets/image/linkedin.png": "f53c4c9b041001471a7a447872a09ce6",
"assets/assets/image/matrix2.gif": "a4b28c9b621dc8c59c4e51f1ee26e183",
"assets/assets/image/message.png": "82304a4a4bde2325b2e1822dc0eea21e",
"assets/assets/image/stack-overflow.png": "a27a6b82af35ab57702c0725a719e429",
"assets/assets/image/twitter.png": "08d274bcaf71630fe630dce7373e3fde",
"assets/assets/image/web-browser.png": "00334afbe46eb9ea78820b9e13a1addc",
"assets/assets/lottie/developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/FontManifest.json": "1de449e6905d8d9347970fc78d37838b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c02e163102a5f010143b49188037ea39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"custom.js": "5cde52d8c61aa76aed2d3997bdb63743",
"favicon.ico": "e550f32fa0cf3f506c7d24b63a71110d",
"icons/Icon-192.png": "44e57245082252eedd22c9916a0864ce",
"icons/Icon-512.png": "718a50617da9fbf370a509d11189f6ec",
"index.html": "36aff294bd8bc4e1e554e94a55229bc1",
"/": "36aff294bd8bc4e1e554e94a55229bc1",
"main.dart.js": "90e1b36a95c63e1d47f142d43af553b8",
"manifest.json": "2ae30e97a838a40dc436ef95d78a309d",
"version.json": "bee51082352dc774675d0f152ed71214"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
