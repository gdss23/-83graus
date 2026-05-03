self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', () => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  // Apenas deixa passar, mas já ativa os requisitos do PWA
});
