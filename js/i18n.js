(() => {
  'use strict';

  if (window.__standaloneLanguagePackLoaded) return;
  window.__standaloneLanguagePackLoaded = true;

  const storageKey = 'site-language';
  const labels = {
    Home: '首页',
    Publications: '出版成果',
    Projects: '研究项目',
    Education: '教育经历',
    Experience: '工作经历',
    Blog: '博客',
    Welcome: '欢迎',
    'Research Interests': '研究方向',
    'Current Positions': '当前职位',
    'Recent Publications': '近期成果',
    'View Publications': '查看出版成果',
    'Explore Projects': '浏览研究项目',
    'View All Publications': '查看全部成果',
    'Journal Articles': '期刊论文',
    'Under Review': '审稿中',
    'Conference Papers': '会议论文',
    Preprints: '预印本'
  };

  let language = localStorage.getItem(storageKey) === 'zh-CN' ? 'zh-CN' : 'en';
  const originals = new WeakMap();
  const pendingRoots = new Set();
  let scheduled = false;
  let languageButton = null;
  let originalHero = null;

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const parent = node.parentElement;
    if (!parent || parent.closest('script, style, code, pre, .hero-title')) return;

    if (!originals.has(node)) originals.set(node, node.nodeValue);
    const original = originals.get(node);
    const trimmed = original.trim();
    const translated = labels[trimmed];

    if (language === 'zh-CN' && translated) {
      const desired = original.replace(trimmed, translated);
      if (node.nodeValue !== desired) node.nodeValue = desired;
    } else if (language === 'en' && node.nodeValue !== original) {
      node.nodeValue = original;
    }
  }

  function translateSubtree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
  }

  function updateIdentity() {
    const title = document.querySelector('.hero-title');
    if (title) {
      if (originalHero === null) originalHero = title.innerHTML;
      const desired = language === 'zh-CN'
        ? '叶一明 <span class="hero-subtitle">Sam（Somyajit Chakraborty）</span>'
        : originalHero;
      if (title.innerHTML !== desired) title.innerHTML = desired;
    }

    const logo = document.querySelector('.nav-logo');
    if (logo) {
      const desiredLogo = language === 'zh-CN' ? '叶一明' : 'Somyajit Chakraborty';
      if (logo.textContent !== desiredLogo) logo.textContent = desiredLogo;
    }
  }

  function updateButton() {
    if (!languageButton) return;
    languageButton.textContent = language === 'zh-CN' ? 'EN' : '中文';
    languageButton.setAttribute(
      'aria-label',
      language === 'zh-CN' ? 'Switch to English' : '切换为简体中文'
    );
  }

  function applyLanguage(nextLanguage) {
    language = nextLanguage === 'zh-CN' ? 'zh-CN' : 'en';
    localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    updateIdentity();
    translateSubtree(document.body);
    updateButton();
  }

  function initialize() {
    const actions = document.querySelector('.nav-actions');
    const theme = document.querySelector('.theme-toggle:not(.language-toggle)');

    if (actions && theme) {
      languageButton = document.querySelector('.language-toggle');
      if (!languageButton) {
        languageButton = document.createElement('button');
        languageButton.type = 'button';
        languageButton.className = 'theme-toggle language-toggle';
        languageButton.style.fontSize = '0.72rem';
        languageButton.style.fontWeight = '700';
        theme.insertAdjacentElement('afterend', languageButton);
      }
      languageButton.addEventListener('click', () => {
        applyLanguage(language === 'en' ? 'zh-CN' : 'en');
      });
    }

    applyLanguage(language);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => pendingRoots.add(node));
      });

      if (scheduled || pendingRoots.size === 0) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        pendingRoots.forEach((root) => translateSubtree(root));
        pendingRoots.clear();
        scheduled = false;
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
