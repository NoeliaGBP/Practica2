if (navigator.serviceWorker) {
    //identificar si está en local o en github
    navigator.serviceWorker.register(window.location.hostname === 'localhost' ? '/sw.js' : './sw.js');
}
// github.io/repo/
