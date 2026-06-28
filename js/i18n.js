```javascript
(() => {
  const key = 'site-language';
  let lang = localStorage.getItem(key) === 'zh-CN' ? 'zh-CN' : 'en';

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

  const originals = new WeakMap();
  let button;
  let originalHero;

  function translate(root = document.body) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
      const parent = node.parentElement;

      if (
        !parent ||
        parent.closest('script, style, code, pre, .hero-title')
      ) {
        continue;
      }

      if (!originals.has(node)) {
        originals.set(node, node.nodeValue);
      }

      const original = originals.get(node);
      const trimmed = original.trim();

      if (lang === 'zh-CN' && labels[trimmed]) {
        node.nodeValue = original.replace(trimmed, labels[trimmed]);
      }

      if (lang === 'en') {
        node.nodeValue = original;
      }
    }
  }

  function updateIdentity() {
    const title = document.querySelector('.hero-title');

    if (title) {
      if (originalHero === undefined) {
        originalHero = title.innerHTML;
      }

      title.innerHTML =
        lang === 'zh-CN'
          ? '叶一明 <span class="hero-subtitle">Sam（Somyajit Chakraborty）</span>'
          : originalHero;
    }

    const logo = document.querySelector('.nav-logo');

    if (logo) {
      logo.textContent =
        lang === 'zh-CN'
          ? '叶一明'
          : 'Somyajit Chakraborty';
    }
  }

  function apply(next) {
    lang = next === 'zh-CN' ? 'zh-CN' : 'en';

    localStorage.setItem(key, lang);
    document.documentElement.lang = lang;

    updateIdentity();
    translate();

    if (button) {
      button.textContent = lang === 'zh-CN' ? 'EN' : '中文';

      button.setAttribute(
        'aria-label',
        lang === 'zh-CN'
          ? 'Switch to English'
          : '切换为简体中文'
      );
    }
  }

  function initLanguagePack() {
    const actions = document.querySelector('.nav-actions');
    const theme = document.querySelector('.theme-toggle');

    if (
      actions &&
      theme &&
      !document.querySelector('.language-toggle')
    ) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'theme-toggle language-toggle';
      button.style.fontSize = '0.72rem';
      button.style.fontWeight = '700';

      button.addEventListener('click', () => {
        apply(lang === 'en' ? 'zh-CN' : 'en');
      });

      actions.insertBefore(button, theme);
    }

    apply(lang);

    new MutationObserver(() => {
      translate();
      updateIdentity();
    }).observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initLanguagePack,
      { once: true }
    );
  } else {
    initLanguagePack();
  }
})();
```
