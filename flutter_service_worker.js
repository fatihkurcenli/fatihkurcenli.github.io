'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7710a14b0363d968d6e13b15fff099c2",
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
".git/index": "5b57082d3c1a2a5de9c208c698c6fe97",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a657f59276d31408e58fd763dbb3ace1",
".git/logs/refs/heads/master": "a657f59276d31408e58fd763dbb3ace1",
".git/logs/refs/remotes/origin/HEAD": "7fcc70f722fc4979a956b2cf4f46fabe",
".git/logs/refs/remotes/origin/master": "0b3fb84ef7fb618907d0a2827ff2f4b9",
".git/objects/04/8171f8da5dc03bd51cfb49ccd6d444959b9909": "c8758938b589594d6958e58ca0e61a76",
".git/objects/07/d9774ca1a9126e5e9a1750d9c470c9dcdd6128": "84900076a28981f6be290c75225ea9ba",
".git/objects/16/335522afb3433fdd2746f91ac10b0f2160e1ad": "d9beeab2c963476285920aded9ecb8ea",
".git/objects/20/39864f9cb6d40d7cfc57b4cec6dfcba2a5c5ca": "c183845009bc7b48e98ae3edb6056da5",
".git/objects/29/ac19f8b45afe9fc003cd3f45184d42df9dbd6e": "9896a06b0e918c8486243be2d50c9e18",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/34/65c52edaff3f12b21caf77760d6a510aa922b8": "7a9f33c8f67a0413b1392b504e550c22",
".git/objects/35/e506baecbf80c76423b7db3ddc1b16700bbb22": "5cb2ca94555587ab59c06d71d0a682a1",
".git/objects/38/1b4c3e4807601eb21729bb4067e94d3421ad9b": "902e98872b1d26957cd23a68ccd11a3e",
".git/objects/3e/56213515a3e242bedf58eab1de055eaa152c3e": "6f75bd5e06026ddae4804052d96949d7",
".git/objects/46/bcbd838c717ac9d12f8d0f833e7d590e7c9ed9": "6ca82b7b62a54b727fefe3d7fc927c3d",
".git/objects/4e/579f8464b24012584497594939cbd8bf1055ab": "66745cbcf240ed9bd561eca6bb6697ef",
".git/objects/5e/67e44da427cf19732331838bfbd8cc29c270b1": "a106c3308005d643016f4f03099acecc",
".git/objects/66/633c2c93c77fc7415fc9db50513cccc2f2a95b": "3e5c5ee2bde2b05519de882253bb3971",
".git/objects/67/cef6849ddf21824cae15186af8dfda5ef576f0": "be23ac6466e927bbd361089ef796a6c6",
".git/objects/68/37d47394f62b34a4dfc9484291298ca31747d5": "98d736559781e45043f12a820c16ed0a",
".git/objects/68/bab4dfb784995bea7c28c34a56ca7139fd8922": "3f19ba96e1154c14aa34608aa2dcf371",
".git/objects/69/8e1cae9675770834ffaf58da37d6375f7dce28": "f45362179ea35b2fc608b7f878eaecd5",
".git/objects/6d/f33d70e3c0e7b3ffb4bdb3a9a70902388ae568": "8bfa602f828928ce409715fe07297bcf",
".git/objects/73/5cd496f1bb4aac982faf4b538433e38597e7f1": "e36456750d58f110bc7e618ba7140088",
".git/objects/79/9c151e9dd5919503924b6a4b578f2730ee5fc5": "7058cb9c495b438d6494dff91c2b4f72",
".git/objects/80/43fc103601b31a48059ca644e1450f35777b37": "cfe090596f50afdbc81d9f4fd1528764",
".git/objects/87/9b965e8317cebdd72c9d8eb499670d3ea2d029": "647afba48e9206260c21deb4017b5e72",
".git/objects/96/1a3e0ee34664e589b0616c03779ae67f23dd17": "657efb3a15a66f0f870974323cb2db64",
".git/objects/a9/bcd85d429dd4bff7642dc893a15efe332d53b0": "e75a8c820d7113615cdd1fd504337dec",
".git/objects/b3/16c8339ef4b65f2c6a573ee0718ad43539fb25": "cbfcf3e6e2d67f5391c443e16e6d4a08",
".git/objects/b7/2c97e197943892e05c374f870ab5535ae5754f": "b6340ea369805819968029c4fe0545cb",
".git/objects/b9/4193c1f813708722b86f396215923e7f2d0db7": "0156617491895de121143107ab92849b",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/c3a01067c8a9bf54781eb1184de52b5557a884": "a08b0294956e05ab58cd363ab2fa3f0b",
".git/objects/bb/a9261def25b0c40a16d459f4d00e8efb114a35": "2b73e3415b97d923d8734b27a8ec4a59",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/cf8200a84bea5b1217bf0701b00d935ada0e14": "79795a8c906bc65a9eb386067744b2f1",
".git/objects/c0/29011afd0212f22bdaba30642c5f41e5882c55": "52581524dbb13371dbe0fd42f0cd0278",
".git/objects/c6/7af5835b4e5ea53bef3236201cca9e5a988825": "782da3544394ee40122bf4d827767cd6",
".git/objects/cc/9425383fa2c89f7c76d2b1a76b0b2bb647a9c1": "537413719b3b964336bd2633aa0d2641",
".git/objects/d0/092e01e6876cbf81f34a47e4e0767cd53dfbf5": "3bf220a1f3bc814237df7ea09f96d440",
".git/objects/d1/717811bd7d26d9f96d3a46b72e9609912b87d0": "6e8f85b72ea0b3203647980abc495f6d",
".git/objects/e3/871fe186965a9fa37ec4bc3d2ba1f218184433": "ffc5c05d0f18cd9bbc0af3f16893bf85",
".git/objects/e6/08c7eb15dc24e9aab10ad197df597b557c2e4d": "df97b2002c1c60dc524812e1cf225a7b",
".git/objects/e9/3643cda3e9d572763d3d5fc464157ac08411cd": "7e52cef597fb3fac06443c7628911173",
".git/objects/ec/245d4334f6c9f4c6ba581e6fd4bb7d6991be92": "b7510c6faef72d3565874f9e9c4c36e7",
".git/objects/ee/11e7ffeb40fb44d3b962d4ba22ab876c7f0d9f": "d63de1a083e9a0c68b1ba75edf08c112",
".git/objects/ee/12c8ec28f84980a212953985f3d4e5e5e27117": "b60ae2256e3e1dd3009d9f37f989d363",
".git/objects/ef/5ce5d8457c1d0b235219199a869e77d28c9f23": "5d2d8efffcc137419a9a9a1d3a2dcf1d",
".git/objects/ef/f0bf6701167f8922ce3612f77a4eae8f5f3874": "64331f14dbefc8bfec39d301440d1c46",
".git/objects/f1/21dbe56923118d9b1edcce05a1374188c381bc": "2fb6c525a057ef966d6aa3424a3f4abe",
".git/objects/f6/cedb8a9fee458875263f19c2871ea08ed05c94": "ff227e723204cdb2de4c0f71ec97f4f2",
".git/objects/f7/512cddf6e5d5f213c6e0749490f901c7e92cad": "c21045c08ec6f6c103285369b7e75b91",
".git/objects/f8/e5811868c395221c7ab92a17d8ffbe52a5227d": "7d5851ccd80124993e97c01e6e7416e4",
".git/objects/fb/2eba51249b2653d8ae96d754ba49604ade854a": "0295b663072d38c979f4ea5114095d13",
".git/objects/fb/5447247cb6f0d2fe3fff5412f603c2600cd328": "16d967f63b443be88d0f0b1cac21ea1e",
".git/objects/fd/e1b147b428e3478d8c3ab49553b1252a7e3ae0": "ff68c398efa7f61c76fe007f7c2f3817",
".git/objects/pack/pack-270a012eb79752e1d1485190fbe45cc05ea1c1e6.idx": "c014e9da320d6adef7ea0f1bb15092da",
".git/objects/pack/pack-270a012eb79752e1d1485190fbe45cc05ea1c1e6.pack": "8036293af0977b6e69491b96d6bd7d1a",
".git/packed-refs": "e788f10dbc312a94228a7833949fd286",
".git/refs/heads/master": "8c877d16cbb0e49968bc9e19cd9927b6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8c877d16cbb0e49968bc9e19cd9927b6",
"assets/AssetManifest.json": "4751e74c511e3522920f18cd56358827",
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
"assets/assets/lottie/contact-me.json": "186a862da69cc80505ee5873d7e05f26",
"assets/assets/lottie/developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/lottie/email.json": "276566ca8e4316d9a832ed389b989821",
"assets/assets/lottie/loading-page.json": "b7b6c5a0bcfbb39c27118199b7d47925",
"assets/assets/lottie/message-me.json": "c30d93a530d845374bcbe8c70113dc2e",
"assets/assets/lottie/welcome-splash.json": "b050db78fdc2d5dcd5ca235153dfe4bb",
"assets/assets/lottie/working-about.json": "57a607f893b4686cf2ee671cb5621cb1",
"assets/FontManifest.json": "1de449e6905d8d9347970fc78d37838b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ccc02e0840e3c6ba21dc9c9a0b263a4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"custom.js": "5cde52d8c61aa76aed2d3997bdb63743",
"favicon.ico": "e550f32fa0cf3f506c7d24b63a71110d",
"icons/Icon-192.png": "44e57245082252eedd22c9916a0864ce",
"icons/Icon-512.png": "718a50617da9fbf370a509d11189f6ec",
"index.html": "dea5226e870f7ca01c6ac69e229ab82f",
"/": "dea5226e870f7ca01c6ac69e229ab82f",
"main.dart.js": "6a573691d8e6f5b4cbb8a8fe007e12a4",
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
