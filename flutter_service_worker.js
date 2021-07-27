'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5c7ed536281cb4cd9db930633e29df34",
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
".git/index": "1f4c2735b077bea8b2cb5937e3838de2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5f4fed5d42f09245687868dfcef74cf",
".git/logs/refs/heads/master": "c5f4fed5d42f09245687868dfcef74cf",
".git/logs/refs/remotes/origin/HEAD": "7fcc70f722fc4979a956b2cf4f46fabe",
".git/logs/refs/remotes/origin/master": "1925107d1610893a40c18348453cddbe",
".git/objects/04/8171f8da5dc03bd51cfb49ccd6d444959b9909": "c8758938b589594d6958e58ca0e61a76",
".git/objects/16/335522afb3433fdd2746f91ac10b0f2160e1ad": "d9beeab2c963476285920aded9ecb8ea",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/38/1b4c3e4807601eb21729bb4067e94d3421ad9b": "902e98872b1d26957cd23a68ccd11a3e",
".git/objects/3e/56213515a3e242bedf58eab1de055eaa152c3e": "6f75bd5e06026ddae4804052d96949d7",
".git/objects/66/633c2c93c77fc7415fc9db50513cccc2f2a95b": "3e5c5ee2bde2b05519de882253bb3971",
".git/objects/68/37d47394f62b34a4dfc9484291298ca31747d5": "98d736559781e45043f12a820c16ed0a",
".git/objects/69/8e1cae9675770834ffaf58da37d6375f7dce28": "f45362179ea35b2fc608b7f878eaecd5",
".git/objects/73/5cd496f1bb4aac982faf4b538433e38597e7f1": "e36456750d58f110bc7e618ba7140088",
".git/objects/b9/4193c1f813708722b86f396215923e7f2d0db7": "0156617491895de121143107ab92849b",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c0/29011afd0212f22bdaba30642c5f41e5882c55": "52581524dbb13371dbe0fd42f0cd0278",
".git/objects/cc/9425383fa2c89f7c76d2b1a76b0b2bb647a9c1": "537413719b3b964336bd2633aa0d2641",
".git/objects/d1/717811bd7d26d9f96d3a46b72e9609912b87d0": "6e8f85b72ea0b3203647980abc495f6d",
".git/objects/e6/08c7eb15dc24e9aab10ad197df597b557c2e4d": "df97b2002c1c60dc524812e1cf225a7b",
".git/objects/e9/3643cda3e9d572763d3d5fc464157ac08411cd": "7e52cef597fb3fac06443c7628911173",
".git/objects/f1/21dbe56923118d9b1edcce05a1374188c381bc": "2fb6c525a057ef966d6aa3424a3f4abe",
".git/objects/f7/512cddf6e5d5f213c6e0749490f901c7e92cad": "c21045c08ec6f6c103285369b7e75b91",
".git/objects/fb/5447247cb6f0d2fe3fff5412f603c2600cd328": "16d967f63b443be88d0f0b1cac21ea1e",
".git/objects/fd/e1b147b428e3478d8c3ab49553b1252a7e3ae0": "ff68c398efa7f61c76fe007f7c2f3817",
".git/objects/pack/pack-270a012eb79752e1d1485190fbe45cc05ea1c1e6.idx": "c014e9da320d6adef7ea0f1bb15092da",
".git/objects/pack/pack-270a012eb79752e1d1485190fbe45cc05ea1c1e6.pack": "8036293af0977b6e69491b96d6bd7d1a",
".git/packed-refs": "e788f10dbc312a94228a7833949fd286",
".git/refs/heads/master": "18f3f06a632408f9e9170bfdaabc5688",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "18f3f06a632408f9e9170bfdaabc5688",
"assets/AssetManifest.json": "22b7a11f90954ed2d7e64957981d762a",
"assets/assets/articles/dada.md": "30126ea863a168272b147c5112fd0cbb",
"assets/assets/articles/hello.md": "b232f7610d9c2dfffceef9611d59e722",
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
"assets/assets/lottie/coming-soon.json": "4b760a7787826bb668404186d2f9e5c8",
"assets/assets/lottie/developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/lottie/message-me.json": "c30d93a530d845374bcbe8c70113dc2e",
"assets/assets/lottie/welcome-splash.json": "b050db78fdc2d5dcd5ca235153dfe4bb",
"assets/FontManifest.json": "1de449e6905d8d9347970fc78d37838b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "36264238cf03abb728d7937263b0c217",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"custom.js": "5cde52d8c61aa76aed2d3997bdb63743",
"favicon.ico": "e550f32fa0cf3f506c7d24b63a71110d",
"icons/Icon-192.png": "44e57245082252eedd22c9916a0864ce",
"icons/Icon-512.png": "718a50617da9fbf370a509d11189f6ec",
"index.html": "dc30a43017823aa7d0959ce7919a0698",
"/": "dc30a43017823aa7d0959ce7919a0698",
"main.dart.js": "428c0e799bfcfeb1cfcd1c345d97eb37",
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
