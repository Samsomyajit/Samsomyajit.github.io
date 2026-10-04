(() => {
  'use strict';

  function loadScript(src, onComplete) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onComplete;
    script.onerror = onComplete;
    document.head.appendChild(script);
  }

  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'script';
  preload.href = 'js/app-core.js';
  document.head.appendChild(preload);

  const metadataScript = document.createElement('script');
  metadataScript.src = 'js/person-entity.js';
  metadataScript.defer = true;
  document.head.appendChild(metadataScript);

  loadScript('js/do-better-scores-blog-entry.js?v=20261004b', () => {
    loadScript('js/navier-stokes-blog-entry.js?v=20261004b', () => {
      loadScript('js/latest-news.js?v=20261004b', () => {
        loadScript('js/publication-sync.js?v=20261004b', () => {
          loadScript('js/bio-i18n.js?v=20261004b', () => {
            loadScript('js/app-core.js?v=20261004b', () => {
              window.dispatchEvent(new Event('publication-data-ready'));
              if (window.location.pathname === '/') {
                document.title = 'Somyajit Chakraborty | Doctoral Researcher at Shanghai Jiao Tong University';
              }
            });
          });
        });
      });
    });
  });
})();
