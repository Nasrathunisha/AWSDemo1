// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });

const cache_version = '2024.02.20.01.001'  // increment each time before deployment.
const cachenameprefix = 'offline-cache-';
//const cachename = `${cachenameprefix}${cache_version}`;
//self.assetsmanifest.version withcache_version
const cachename = ${ cachenameprefix }${ self.assetsmanifest.version };