(() => {
  const legacyRoutes = {
    '#home': '/', '#page-home': '/',
    '#publications': '/publications/', '#page-publications': '/publications/',
    '#projects': '/projects/', '#page-projects': '/projects/',
    '#education': '/education/', '#page-education': '/education/',
    '#experience': '/experience/', '#page-experience': '/experience/',
    '#blog': '/blog/', '#page-blog': '/blog/'
  };
  if (window.location.hash.startsWith('#blog/')) {
    window.location.replace('/blog/');
    return;
  }
  if (legacyRoutes[window.location.hash]) {
    window.location.replace(legacyRoutes[window.location.hash]);
    return;
  }

  const navItems = [
    ['/', 'Home', '首页'],
    ['/publications/', 'Publications', '出版成果'],
    ['/projects/', 'Projects', '研究项目'],
    ['/education/', 'Education', '教育经历'],
    ['/experience/', 'Experience', '工作经历'],
    ['/blog/', 'Blog', '博客']
  ];
  const currentPath = window.location.pathname;
  const navLinks = navItems.map(([href, en, zh]) => {
    const current = currentPath === href ? ' aria-current="page"' : '';
    return `<a href="${href}"${current} data-en="${en}" data-zh="${zh}">${en}</a>`;
  }).join('');

  if (!document.querySelector('.site-header')) {
    document.body.insertAdjacentHTML('afterbegin', `
      <a class="skip-link" href="#content">Skip to content</a>
      <header class="site-header"><div class="nav-shell">
        <a class="brand" href="/">Somyajit Chakraborty</a>
        <nav class="desktop-nav" aria-label="Primary navigation">${navLinks}</nav>
        <div class="nav-tools"><button class="tool-button" type="button" data-language-toggle>中文</button><button class="tool-button" type="button" data-theme-toggle>◐</button><button class="menu-button" type="button" data-menu-toggle>☰</button></div>
      </div><nav class="mobile-nav" data-mobile-nav>${navLinks}</nav></header>`);
  }
  if (!document.querySelector('.site-footer')) {
    document.body.insertAdjacentHTML('beforeend', '<footer class="site-footer"><div class="footer-shell"><span>© 2026 Somyajit Chakraborty</span><span data-en="Doctoral Researcher · AI for Science" data-zh="博士研究员 · 科学智能">Doctoral Researcher · AI for Science</span></div></footer>');
  }

  const root = document.documentElement;
  const languageButton = document.querySelector('[data-language-toggle]');
  const themeButton = document.querySelector('[data-theme-toggle]');
  let language = localStorage.getItem('site-language') === 'zh-CN' ? 'zh-CN' : 'en';
  let theme = localStorage.getItem('site-theme') === 'dark' ? 'dark' : 'light';

  const applyLanguage = (nextLanguage) => {
    language = nextLanguage === 'zh-CN' ? 'zh-CN' : 'en';
    root.lang = language;
    root.dataset.language = language;
    localStorage.setItem('site-language', language);
    document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
      const value = language === 'zh-CN' ? element.dataset.zh : element.dataset.en;
      element[element.dataset.i18nHtml === 'true' ? 'innerHTML' : 'textContent'] = value;
    });
    const primaryName = document.querySelector('[data-primary-name]');
    const secondaryName = document.querySelector('[data-secondary-name]');
    if (primaryName && secondaryName) {
      primaryName.textContent = language === 'zh-CN' ? '叶一明' : 'Somyajit Chakraborty';
      secondaryName.textContent = language === 'zh-CN' ? 'Sam（Somyajit Chakraborty）' : '叶一明 · Sam';
    }
    if (languageButton) {
      languageButton.textContent = language === 'zh-CN' ? 'EN' : '中文';
      languageButton.setAttribute('aria-label', language === 'zh-CN' ? 'Switch to English' : '切换为简体中文');
    }
  };

  const applyTheme = (nextTheme) => {
    theme = nextTheme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = theme;
    localStorage.setItem('site-theme', theme);
    if (themeButton) {
      themeButton.textContent = theme === 'dark' ? '☀' : '◐';
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Use light theme' : 'Use dark theme');
    }
  };

  languageButton?.addEventListener('click', () => applyLanguage(language === 'en' ? 'zh-CN' : 'en'));
  themeButton?.addEventListener('click', () => applyTheme(theme === 'light' ? 'dark' : 'light'));
  document.querySelector('[data-menu-toggle]')?.addEventListener('click', () => document.querySelector('[data-mobile-nav]')?.classList.toggle('open'));
  document.querySelectorAll('[data-copy-citation]').forEach((button) => {
    button.addEventListener('click', async () => {
      const citation = document.querySelector(button.dataset.copyCitation)?.textContent?.trim();
      if (!citation) return;
      try {
        await navigator.clipboard.writeText(citation);
        const original = button.textContent;
        button.textContent = language === 'zh-CN' ? '已复制' : 'Copied';
        setTimeout(() => { button.textContent = original; }, 1500);
      } catch (error) { console.warn('Unable to copy citation', error); }
    });
  });

  applyTheme(theme);
  applyLanguage(language);
})();