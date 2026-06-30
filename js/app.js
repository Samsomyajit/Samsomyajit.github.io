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

  function updateCenterDistillRecord() {
    const titles = document.querySelectorAll('.pub-compact-title, .featured-pub-title');
    const title = [...titles].find((element) => element.textContent.trim().startsWith('CenterDistill:'));
    if (!title) return;

    title.textContent = 'CenterDistill: Weakly-supervised distillation for ambiguity-aware cross-lingual QA';
    const card = title.closest('.pub-compact-card, .featured-pub-row');
    if (!card) return;

    const authors = card.querySelector('.pub-compact-authors, .featured-pub-authors');
    if (authors) authors.textContent = 'Chakraborty, S., Naskar, S., Paul, S., Jana, A., Chakraborty, N. and Gayen, A.';

    const badge = card.querySelector('.pub-compact-badge, .featured-pub-badge');
    if (badge) badge.textContent = 'Published';

    const meta = card.querySelector('.pub-compact-meta, .featured-pub-meta');
    if (meta) {
      meta.innerHTML = '<span>Engineering Applications of Neural Networks · CCIS 3025 · Springer Nature Switzerland</span><span class="pub-compact-meta-sep">·</span><span>pp. 1–15</span><span class="pub-compact-meta-sep">·</span><span>2026</span><span class="pub-compact-meta-sep">·</span><a href="https://doi.org/10.1007/978-3-032-31141-2_11" target="_blank" rel="noopener noreferrer">DOI</a>';
    }
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

  loadScript('js/latest-news.js', () => {
    loadScript('js/bio-i18n.js', () => {
      loadScript('js/app-core.js', () => {
        if (window.location.pathname === '/') {
          document.title = 'Somyajit Chakraborty | Doctoral Researcher at Shanghai Jiao Tong University';
        }
        updateCenterDistillRecord();
      });
    });
  });
})();
