(() => {
  'use strict';

  const PACEPAL_TITLE = 'PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being';
  const FOURIER_WAVELET_TITLE = 'A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling';
  const NAVIER_CFD_PROJECT = Object.freeze({
    id: 10,
    title: 'NAVIER-CFD',
    subtitle: 'Neural and Agentic Verification, Integration, Evaluation, and Recommendation for CFD',
    description: 'A CFD-first Python platform and project website for neural PDE solvers, hybrid numerical acceleration, benchmark datasets, paper-evidence-aware model and dataset recommendation, Hugging Face integration, and agentic experiment planning.',
    image: 'assets/img/navier-cfd-logo.svg',
    tags: ['CFD', 'AI4Science', 'Neural PDE Solvers', 'Recommender Systems', 'Python'],
    category: 'AI & Computational Physics',
    githubUrl: 'https://github.com/Samsomyajit/NAVIER-CFD',
    projectUrl: 'https://samsomyajit.github.io/NAVIER-CFD/',
    featured: true,
    year: 2026,
    language: 'Python'
  });
  const ROUTE_PATHS = Object.freeze({
    home: '/',
    publications: '/publications/',
    projects: '/projects/',
    education: '/education/',
    experience: '/experience/',
    blog: '/blog/'
  });

  const PAGE_TITLES = Object.freeze({
    home: 'Somyajit Chakraborty (Sam) | Physical AI Researcher & Doctoral Scholar',
    publications: 'Publications | Somyajit Chakraborty',
    projects: 'Projects | Somyajit Chakraborty',
    education: 'Education | Somyajit Chakraborty',
    experience: 'Experience | Somyajit Chakraborty',
    blog: 'Blog | Somyajit Chakraborty'
  });

  const I18N_LABELS = Object.freeze({
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
    Preprints: '预印本',
    'Work Experience': '工作经历',
    'Academic Experience': '学术经历',
    'Industry Experience': '行业经历',
    Research: '研究',
    Anecdotes: '随笔',
    All: '全部',
    Featured: '精选',
    Languages: '语言',
    Categories: '类别',
    'Read More →': '阅读全文 →',
    'Back to Blog': '返回博客',
    'Loading...': '加载中…',
    Comments: '评论',
    Connect: '联系平台',
    Contact: '联系方式',
    Send: '发送'
  });

  let projectsRendered = false;
  let blogRendered = false;
  let siteInitialized = false;
  let animationObserver = null;

  function addNewPublications() {
    if (typeof publications === 'undefined') return;

    if (Array.isArray(publications.conferences) && !publications.conferences.some((item) => item.title === PACEPAL_TITLE)) {
      publications.conferences.unshift({
        id: 12,
        title: PACEPAL_TITLE,
        authors: 'Chakraborty, S., Shoaib, M., Minghim, R. and Tabassum, M.',
        year: 2026,
        conference: '1st International Conference on Human-Centric Artificial Intelligence (ICHCAI 2026), Halden, Norway',
        publisher: 'IEEE Xplore',
        dates: '27–28 May 2026',
        status: 'Accepted for presentation and publication, subject to revisions, IEEE quality and plagiarism checks, and conference-scope alignment'
      });
    }

    if (Array.isArray(publications.preprints) && !publications.preprints.some((item) => item.title === FOURIER_WAVELET_TITLE)) {
      publications.preprints.unshift({
        id: 13,
        title: FOURIER_WAVELET_TITLE,
        authors: 'Chakraborty, S., Pan, M. and Chen, X.',
        year: 2026,
        journal: 'arXiv preprint arXiv:2606.24696',
        url: 'https://arxiv.org/abs/2606.24696',
        status: 'Submitted to Engineering Applications of Artificial Intelligence'
      });
    }
  }

  function addNewProjects() {
    if (typeof projects === 'undefined' || !Array.isArray(projects)) return;
    const alreadyPresent = projects.some((item) => item.title === NAVIER_CFD_PROJECT.title || item.githubUrl === NAVIER_CFD_PROJECT.githubUrl);
    if (!alreadyPresent) projects.unshift({ ...NAVIER_CFD_PROJECT });
  }

  function findPublicationGroup(title) {
    return [...document.querySelectorAll('#page-publications .pub-compact-group')].find((group) => {
      const heading = group.querySelector('.section-title');
      return heading && heading.textContent.trim().includes(title);
    });
  }

  function createCompactPublicationCard({ badge, badgeClass, title, authors, meta, link }) {
    const card = document.createElement('div');
    card.className = 'pub-compact-card animated-card';
    card.dataset.publicationTitle = title;

    const badgeElement = document.createElement('span');
    badgeElement.className = `pub-compact-badge ${badgeClass}`;
    badgeElement.textContent = badge;

    const content = document.createElement('div');
    content.className = 'pub-compact-content';

    const titleElement = document.createElement('div');
    titleElement.className = 'pub-compact-title';
    titleElement.textContent = title;

    const authorsElement = document.createElement('div');
    authorsElement.className = 'pub-compact-authors';
    authorsElement.textContent = authors;

    const metaElement = document.createElement('div');
    metaElement.className = 'pub-compact-meta';
    meta.forEach((item, index) => {
      if (index > 0) {
        const separator = document.createElement('span');
        separator.className = 'pub-compact-meta-sep';
        separator.textContent = '·';
        metaElement.appendChild(separator);
      }
      const span = document.createElement('span');
      span.textContent = item;
      metaElement.appendChild(span);
    });

    if (link) {
      const separator = document.createElement('span');
      separator.className = 'pub-compact-meta-sep';
      separator.textContent = '·';
      const anchor = document.createElement('a');
      anchor.href = link;
      anchor.target = '_blank';
      anchor.rel = 'noopener';
      anchor.textContent = 'arXiv';
      metaElement.append(separator, anchor);
    }

    content.append(titleElement, authorsElement, metaElement);
    card.append(badgeElement, content);
    return card;
  }

  function addPublicationCardsToPage() {
    const publicationPage = document.getElementById('page-publications');
    if (!publicationPage) return;

    const conferenceGroup = findPublicationGroup('Conference Proceedings');
    const conferenceList = conferenceGroup?.querySelector('.pub-compact-list');
    if (conferenceList && !publicationPage.querySelector(`[data-publication-title="${PACEPAL_TITLE}"]`)) {
      conferenceList.appendChild(createCompactPublicationCard({
        badge: 'Conf.',
        badgeClass: 'conference',
        title: PACEPAL_TITLE,
        authors: 'Chakraborty, S., Shoaib, M., Minghim, R. and Tabassum, M.',
        meta: ['ICHCAI 2026 — IEEE Xplore', 'Halden, Norway', '27–28 May 2026', 'Accepted']
      }));
    }

    const preprintGroup = findPublicationGroup('Preprints');
    const preprintList = preprintGroup?.querySelector('.pub-compact-list');
    if (preprintList && !publicationPage.querySelector(`[data-publication-title="${FOURIER_WAVELET_TITLE}"]`)) {
      preprintList.appendChild(createCompactPublicationCard({
        badge: 'Preprint',
        badgeClass: 'preprint',
        title: FOURIER_WAVELET_TITLE,
        authors: 'Chakraborty, S., Pan, M. and Chen, X.',
        meta: ['arXiv:2606.24696', 'Submitted to Engineering Applications of Artificial Intelligence', '2026'],
        link: 'https://arxiv.org/abs/2606.24696'
      }));
    }

    const kpis = [...publicationPage.querySelectorAll('.kpi-pill')];
    const counts = {
      Journals: 5,
      Conferences: 6,
      'Under Review': 1,
      Preprints: 3,
      Patents: 1,
      Total: 16
    };
    kpis.forEach((pill) => {
      const label = pill.querySelector('.kpi-pill-label')?.textContent.trim();
      const number = pill.querySelector('.kpi-pill-number');
      if (label && number && Object.prototype.hasOwnProperty.call(counts, label)) {
        number.textContent = String(counts[label]);
      }
    });
  }

  function ensureRootBase() {
    if (document.querySelector('base')) return;
    const base = document.createElement('base');
    base.href = '/';
    document.head.prepend(base);
  }

  function optimizeImages(root = document) {
    root.querySelectorAll('img').forEach((image) => {
      image.decoding = 'async';
      if (image.classList.contains('profile-image')) {
        image.loading = 'eager';
        image.fetchPriority = 'high';
      } else {
        if (!image.hasAttribute('loading')) image.loading = 'lazy';
        image.fetchPriority = 'low';
      }
    });
  }

  function normalizePath(pathname) {
    const trimmed = pathname.replace(/\/+$/, '');
    return trimmed || '/';
  }

  function routeFromLocation() {
    const path = normalizePath(window.location.pathname);
    const pageByPath = Object.entries(ROUTE_PATHS).find(([, routePath]) => normalizePath(routePath) === path);

    if (pageByPath) {
      const page = pageByPath[0];
      const blogId = page === 'blog' ? new URLSearchParams(window.location.search).get('post') : null;
      return { page, blogId, legacy: false };
    }

    let hash = window.location.hash.replace(/^#/, '');
    if (hash.startsWith('page-')) hash = hash.slice(5);

    if (hash.startsWith('blog/')) {
      return { page: 'blog', blogId: hash.slice(5), legacy: true };
    }

    if (Object.prototype.hasOwnProperty.call(ROUTE_PATHS, hash)) {
      return { page: hash, blogId: null, legacy: true };
    }

    return { page: 'home', blogId: null, legacy: path !== '/' || Boolean(window.location.hash) };
  }

  function pathForRoute(page, blogId = null) {
    if (page === 'blog' && blogId) return `/blog/?post=${encodeURIComponent(blogId)}`;
    return ROUTE_PATHS[page] || '/';
  }

  function updateMetadata(page, blogId = null) {
    document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `${window.location.origin}${pathForRoute(page, blogId)}`;
  }

  function setCleanNavigationUrls() {
    document.querySelectorAll('a[data-page]').forEach((link) => {
      const page = link.dataset.page;
      if (ROUTE_PATHS[page]) link.setAttribute('href', ROUTE_PATHS[page]);
    });
  }

  function ensureDynamicContent(page) {
    if (page === 'projects' && !projectsRendered) {
      renderProjects();
      projectsRendered = true;
      optimizeImages(document.getElementById('page-projects'));
    }

    if (page === 'blog' && !blogRendered) {
      renderBlogPage();
      blogRendered = true;
      optimizeImages(document.getElementById('page-blog'));
    }
  }

  function installAnimationOptimizer() {
    animateCards = function optimizedAnimateCards() {
      const cards = document.querySelectorAll('.page.active .animated-card:not(.visible)');
      if (!cards.length) return;

      if (!('IntersectionObserver' in window)) {
        cards.forEach((card) => card.classList.add('visible'));
        return;
      }

      if (!animationObserver) {
        animationObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const delay = Number(entry.target.dataset.animationDelay || 0);
            window.setTimeout(() => entry.target.classList.add('visible'), delay);
            animationObserver.unobserve(entry.target);
          });
        }, { threshold: 0.1, rootMargin: '80px 0px' });
      }

      cards.forEach((card, index) => {
        card.dataset.animationDelay = String(Math.min(index, 8) * 70);
        animationObserver.observe(card);
      });
    };
  }

  function installNavigationOptimizer() {
    navigateTo = function optimizedNavigateTo(page, blogId = null, updateUrl = true) {
      if (!Object.prototype.hasOwnProperty.call(ROUTE_PATHS, page)) page = 'home';
      ensureDynamicContent(page);

      currentPage = page;
      currentBlogId = blogId;

      if (updateUrl) {
        const target = pathForRoute(page, blogId);
        const current = `${window.location.pathname}${window.location.search}`;
        if (current !== target || window.location.hash) {
          window.history.pushState({ page, blogId }, '', target);
        }
      }

      updateMetadata(page, blogId);

      document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.toggle('active', link.dataset.page === page);
      });

      document.querySelectorAll('.page').forEach((element) => element.classList.remove('active'));
      const pageElement = document.getElementById(`page-${page}`);
      if (pageElement) pageElement.classList.add('active');

      closeMobileMenu();
      window.scrollTo(0, 0);

      if (page === 'blog' && blogId) showBlogPost(blogId);
      else if (page === 'blog') showBlogList();

      window.requestAnimationFrame(animateCards);
    };

    navigateFromHash = function optimizedNavigateFromLocation() {
      const route = routeFromLocation();
      navigateTo(route.page, route.blogId, false);
      if (route.legacy) {
        window.history.replaceState(
          { page: route.page, blogId: route.blogId },
          '',
          pathForRoute(route.page, route.blogId)
        );
      }
    };
  }

  function addListenerOnce(element, type, handler, key) {
    if (!element || element.dataset[key] === '1') return;
    element.dataset[key] = '1';
    element.addEventListener(type, handler);
  }

  function initializeSite() {
    if (siteInitialized) return;
    siteInitialized = true;

    initTheme();
    try {
      loadBlogInteractions();
    } catch (error) {
      console.warn('Ignoring invalid saved blog interactions.', error);
      blogInteractions = {};
    }

    addListenerOnce(document.querySelector('.theme-toggle'), 'click', toggleTheme, 'themeBound');
    addListenerOnce(document.querySelector('.mobile-menu-btn'), 'click', toggleMobileMenu, 'menuBound');

    document.querySelectorAll('.nav-link').forEach((link) => {
      addListenerOnce(link, 'click', (event) => {
        event.preventDefault();
        navigateTo(link.dataset.page);
      }, 'navigationBound');
    });

    addListenerOnce(document.querySelector('.nav-logo'), 'click', () => navigateTo('home'), 'logoBound');

    document.querySelectorAll('.quick-link-card').forEach((card) => {
      addListenerOnce(card, 'click', () => navigateTo(card.dataset.page), 'quickLinkBound');
    });

    document.querySelectorAll('.hero-cta .btn[data-page]').forEach((button) => {
      addListenerOnce(button, 'click', (event) => {
        event.preventDefault();
        navigateTo(button.dataset.page);
      }, 'heroBound');
    });

    addNewProjects();
    addPublicationCardsToPage();
    optimizeImages();
    setCleanNavigationUrls();
    navigateFromHash();
    window.addEventListener('popstate', navigateFromHash);

    const year = document.getElementById('current-year');
    if (year) year.textContent = String(new Date().getFullYear());

    animateCards();
    initializeLanguagePack();
  }

  function initializeLanguagePack() {
    const storageKey = 'site-language';
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
      const translated = I18N_LABELS[trimmed];

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

    function updateLanguageButton() {
      if (!languageButton) return;
      languageButton.textContent = language === 'zh-CN' ? 'EN' : '中文';
      const label = language === 'zh-CN' ? 'Switch to English' : '切换为简体中文';
      languageButton.setAttribute('aria-label', label);
      languageButton.title = label;
    }

    function applyLanguage(nextLanguage) {
      language = nextLanguage === 'zh-CN' ? 'zh-CN' : 'en';
      localStorage.setItem(storageKey, language);
      document.documentElement.lang = language;
      document.documentElement.dataset.language = language;
      updateIdentity();
      translateSubtree(document.body);
      updateLanguageButton();
    }

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
        languageButton.style.letterSpacing = '-0.02em';
        theme.insertAdjacentElement('afterend', languageButton);
      }
      addListenerOnce(languageButton, 'click', () => {
        applyLanguage(language === 'en' ? 'zh-CN' : 'en');
      }, 'languageBound');
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

  function loadOriginalApplication() {
    const script = document.createElement('script');
    script.src = 'js/app-original.js';
    script.async = true;
    script.onload = () => {
      if (typeof init === 'function') document.removeEventListener('DOMContentLoaded', init);
      installAnimationOptimizer();
      installNavigationOptimizer();
      initializeSite();
    };
    script.onerror = () => console.error('Unable to load the website application.');
    document.head.appendChild(script);
  }

  addNewPublications();
  addNewProjects();
  ensureRootBase();

  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'script';
  preload.href = 'js/app-original.js';
  document.head.appendChild(preload);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadOriginalApplication, { once: true });
  } else {
    loadOriginalApplication();
  }
})();
