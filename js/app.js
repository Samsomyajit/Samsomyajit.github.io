(() => {
  if (typeof publications !== 'undefined' && Array.isArray(publications.conferences)) {
    const pacePalTitle = 'PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being';
    const alreadyAdded = publications.conferences.some((item) => item.title === pacePalTitle);
    if (!alreadyAdded) {
      publications.conferences.unshift({
        id: 12,
        title: pacePalTitle,
        authors: 'Chakraborty, S., Shoaib, M., Minghim, R. and Tabassum, M.',
        year: 2026,
        conference: '1st International Conference on Human-Centric Artificial Intelligence (ICHCAI 2026), Halden, Norway',
        publisher: 'IEEE Xplore',
        status: 'Accepted for presentation and publication, subject to revisions and publication checks'
      });
    }
  }

  const loadScript = (src, onload) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload;
    document.head.appendChild(script);
  };

  loadScript('js/app-original.js', () => {
    if (document.readyState !== 'loading' && typeof init === 'function') {
      document.removeEventListener('DOMContentLoaded', init);
      init();
    }
    loadScript('js/i18n.js');
  });
})();