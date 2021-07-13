'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ed42a98de42f81e8192e2227603aafa8",
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
".git/index": "ddb1a0b18477ce3abbc6ee552b3cdb94",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08695080551e018ad72f0025fcd58b15",
".git/logs/refs/heads/master": "08695080551e018ad72f0025fcd58b15",
".git/logs/refs/remotes/origin/master": "76d6d53f82fd2f5c3e7a2526da115374",
".git/objects/07/775d2f3a8bfb939a0af2e6ab739f4117ade72f": "479107dd0514d53fc617993fdd4fae97",
".git/objects/0c/5a4cb88a3052278435b6f338c818617d33e22c": "0576c7e34768d8b759d2f82ee5d8b52a",
".git/objects/17/39e978a34d39032067d15b300987830e89b450": "784bf153405aff5c0913fe089957c346",
".git/objects/18/212ae05b4c11d2476a74e7fbd343e2231a6f7e": "6f7035054c7493acaf80c0e67837dd3c",
".git/objects/1b/be184028267dd719a409a4192ca980211edaf1": "7a8669d72b1849d86ee0baf5969783f8",
".git/objects/1e/775287f85bca89aec64b054afac8f37e75fd82": "e83826eff95b2ce6f6d32bbf51e2a976",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/54996f4834eba4ad79472715653d734fe431a5": "e6c1abf09aff43e31556cb96d71ebc57",
".git/objects/2a/220d70ca3848d6594fa026a204ab6801f8fadf": "eaef72eb429d97232056d5e054428634",
".git/objects/2b/a128dc7819f442d59f0088280ebdb09ce89f1b": "6a301a761cde6171c82c7bbfa520b8de",
".git/objects/30/bd78c542b26f7cb41bdd3cc2ffa06757755efd": "cc39150038c11845b13deb7924ce7a0e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/09b1c4b8e1754d50c8fcba4eb6bd6cc29cd63c": "b51e8622e912c9595c8451a6e8264caa",
".git/objects/3c/7b0a8dac9e95a82e9ac7e36c80aeecb81cd450": "be0a5fa1dd164adbcedd2267ce0a3927",
".git/objects/3f/6088b55560c5dd9f915ad07aed1c9eedda455f": "4c76d4aa0e08feafa97fd4e771ba2273",
".git/objects/43/4916530fdf92df46911e327878b7a20a9aff2a": "72c07e2b5c82569176b417b673f51506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/5d347613c6243eced3f523fa1ab57b0e3e8988": "00795306400d100d3f48e8995e92e74d",
".git/objects/4a/c74439d3a667489644334b98266f84a9eea860": "a8465003d3b69a64d6ae85197c9c90d1",
".git/objects/4f/5bca225fa78088a4e254540888727155cd43d7": "bd5deab86d2545c8a6f448d98836297b",
".git/objects/50/bf5ff64f3a07ff5ca1259ee88293f7cef996c0": "e479d9f2612f6f11025c6289a8dbbd2a",
".git/objects/56/dc02a23229273b4224bf7f4e10044f73c4ac6b": "757197689090d51defce7f73a951006f",
".git/objects/60/4f8d1c9c18f0bc805d83d65475746716d79b99": "61ec4156b439fda81228b2d986f49ee6",
".git/objects/62/4e9989644c6f787989f564bb308f37d7c01b40": "fc4963bf7b79c4ada9835ace1127795e",
".git/objects/64/78ac7424a5646fa9b005f8a7c2282ecbdedfd0": "ba5f3a88c6189222298d9d9d4e0a6976",
".git/objects/66/182f1d2663edf440d6b3f300f485c1f87d83e6": "fa9f31fd06d033118afea61da954b493",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ec01ebc72808c458b9846921b25c0404b43579": "cb880b863c751c1a41b7fe90e6a432c2",
".git/objects/82/4c4b3aad4b29cb63602e2a9d91b70418e41528": "ab222999854f656747151605a45f62d0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/43b7bd593c11cfa0e087b30f302f9350c66c39": "184db095a1b14fbeb70a5aae984752b0",
".git/objects/8e/472b9dd185ac7e9a4b040dba3607a4fc7ec9aa": "515d5932ad6fecc7cf815b60d9a647cb",
".git/objects/98/e09bf711428eab3e5531b52fdbfab86e94dc60": "048a7fd44ec385f039be69dcfd8d578d",
".git/objects/9a/cd0af8c8f9721c5fcd02c20c7a83dac37b7110": "d8ce2f7264dc74b461b1e40dce5177ae",
".git/objects/9a/e8119f2bb746c8f533cf26d36bc3ae5b2b1c81": "fb190af1117ebefec0d22daa0e6f4270",
".git/objects/9f/ec24357858cf5d3abdca4df796056aceac3ef4": "51aef90ec130f29b0ee1ba9e00344f57",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/d4ae9ecfe7b5da690f9ec9915c1f91958a587a": "e1af0ed3dd06ad67e13573b689fda8eb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/3cbe88ab48cdfce41d8bb14fbc4e404e32f7a8": "1b06723676ba12470fdce367fb30019b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/53c5ff897b2cfb76080ef29e56fcca728647d5": "5d55a9745c970adccf281576d646f069",
".git/objects/b3/49d2572880fbe9da1ed5bfde8ba3e78228a4bd": "0cffba3968cbc2a10184d4ca3c827108",
".git/objects/b6/5ef3d08d9c33cd69c1c6e4b9f4f5811eb55ad5": "04f9148af9622e45c9c2ecfc583184dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/ab3909a7e1298b5b563acb959e185d0cc4eada": "3fb006e28aa85d97ce234e489a3e4ce7",
".git/objects/bf/330fcead73070510435f548335004ae5bbfd37": "c701d9693eae2bbe0c8706869552726f",
".git/objects/cc/f9982e17a2560d431bc9a6603f8011f753f3b4": "94696bfceb9f1b0c96c0ac901e2179fb",
".git/objects/d7/1709fbb392213eafec77c321c9f6a3fe8c7780": "f5895502909a4e939c62f8423bb1dcba",
".git/objects/dd/92804c5252e90a19d5fd6ebfa19b36b2bdc5e4": "aac94e2ab6bca704d35c0145154ae1d1",
".git/objects/e0/dff7c1c1493087e21c712f0e2e094907e9e9f9": "2de8dbbeb926d24dcb23da58c8add5fa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/c3ead7c40665fbd6f1ebf9b46cbb93a1b9d315": "f17ee1505b47f3fdd859e0ac602c5031",
".git/objects/f9/ee2a53b95f3c1815503cfad866c79ea2a00a57": "b8920f2770e84aee4d849e0eff4cee7c",
".git/objects/fc/1f2b4fc61969d4cac6c102fb6d0be73f5c80d2": "57a75cf4a08817683d7c666358e1d4be",
".git/objects/fc/833a216ba78f0e89afafe46f6c40b18bd1243f": "a639ed2c45c0cabca7278dbd5140c729",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "e3e3e35de979273206f7c511be068f58",
".git/refs/remotes/origin/master": "e3e3e35de979273206f7c511be068f58",
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
"assets/AssetManifest.json": "5b014f7852bba59967c3bd2e54a3812b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "78ef03032c549442545da9cf41d517b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"favicon.ico": "e550f32fa0cf3f506c7d24b63a71110d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "44e57245082252eedd22c9916a0864ce",
"icons/Icon-512.png": "718a50617da9fbf370a509d11189f6ec",
"index.html": "a71ce6f7e44f1dfa73e2c63f3abd5388",
"/": "a71ce6f7e44f1dfa73e2c63f3abd5388",
"main.dart.js": "72fca6f247a7eb89ca64e1b7bcffa2e8",
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
