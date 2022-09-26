// Solo sale una vez

self.addEventListener('install', event => {
    console.log("SW: Instalado");
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Intalación finalizada");
            resolve('ok');
        }, 3000)
    });
    event.waitUntil(promise);
});
self.addEventListener('activate', event => { console.log("SW: Activado"); });
self.addEventListener('fetch', event => {
    //console.log(event.request.url);
    if (event.request.url.includes('style.css')) {
        const response = new Response(
            `body {
                color: white;
                background-color: black;
            }`,
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            });
        event.respondWith(response);
    }
});
self.addEventListener('fetch', event => {
    if (event.request.url.includes('img3.jpg')) {
        const response =  fetch('./images/img2.jpg');
        event.respondWith(response);
    }
});
