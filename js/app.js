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

  loadScript('js/latest-news.js', () => {
    loadScript('js/bio-i18n.js', () => {
      loadScript('js/app-core.js');
    });
  });
})();
