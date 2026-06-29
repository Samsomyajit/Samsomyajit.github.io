(() => {
  'use strict';

  const sectionId = 'latest-news-section';
  const rotationDelay = 4800;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const newsItems = [
    {
      en: [
        { text: 'Joining the ' },
        { text: '2026 DeeCamp AI4S Training Camp', highlight: true },
        { text: ' (聚焦AI4S！2026 DeeCamp科学智能训练营).' }
      ],
      zh: [
        { text: '加入 ' },
        { text: '2026 DeeCamp 科学智能训练营', highlight: true },
        { text: '（聚焦 AI4S）。' }
      ]
    },
    {
      en: [
        { text: 'Presented ' },
        { text: 'WindOps Sentinel', highlight: true },
        { text: ' at ' },
        { text: 'MindSpec', highlight: true },
        { text: '.' }
      ],
      zh: [
        { text: '在 ' },
        { text: 'MindSpec', highlight: true },
        { text: ' 展示 ' },
        { text: 'WindOps Sentinel', highlight: true },
        { text: '。' }
      ],
      href: 'https://www.youtube.com/watch?v=gyae5ExsYLg&t=3s',
      linkLabel: 'Watch presentation →',
      linkLabelZh: '观看演示 →'
    },
    {
      en: [
        { text: 'CenterDistill', highlight: true },
        { text: ' accepted at ' },
        { text: 'CORE EANN / EAAAI 2026', highlight: true },
        { text: '.' }
      ],
      zh: [
        { text: 'CenterDistill', highlight: true },
        { text: ' 被 ' },
        { text: 'CORE EANN / EAAAI 2026', highlight: true },
        { text: ' 录用。' }
      ]
    },
    {
      en: [
        { text: 'New paper: ' },
        { text: 'A Physics-Informed Fourier-Wavelet Transformer', highlight: true },
        { text: ' for Multiscale Computational Fluid Dynamics Surrogate Modeling.' }
      ],
      zh: [
        { text: '新论文：' },
        { text: '物理信息 Fourier-Wavelet Transformer', highlight: true },
        { text: '，用于多尺度计算流体力学代理建模。' }
      ],
      href: 'https://arxiv.org/abs/2606.24696',
      linkLabel: 'Read on arXiv →',
      linkLabelZh: '在 arXiv 阅读 →'
    },
    {
      en: [
        { text: 'Started working with ' },
        { text: 'Dr. Danny H. Van Der Haven', highlight: true },
        { text: ' on ' },
        { text: 'Porosity from Drag Experiments', highlight: true },
        { text: ', in collaboration with ' },
        { text: 'Global Labs', highlight: true },
        { text: '.' }
      ],
      zh: [
        { text: '开始与 ' },
        { text: 'Danny H. Van Der Haven 博士', highlight: true },
        { text: '及 ' },
        { text: 'Global Labs', highlight: true },
        { text: ' 合作开展' },
        { text: '基于阻力实验的孔隙率研究', highlight: true },
        { text: '。' }
      ]
    },
    {
      en: [
        { text: 'Industrial partnership with ' },
        { text: 'Beijing Corp', highlight: true },
        { text: ' on a ' },
        { text: 'pipeline digital twin', highlight: true },
        { text: ' for ' },
        { text: 'CFD analysis', highlight: true },
        { text: '.' }
      ],
      zh: [
        { text: '与 ' },
        { text: '北京企业', highlight: true },
        { text: '开展' },
        { text: '管道数字孪生', highlight: true },
        { text: '与 ' },
        { text: 'CFD 分析', highlight: true },
        { text: '产业合作。' }
      ]
    }
  ];

  let startIndex = 0;
  let timer = null;
  let paused = false;
  let rotating = false;
  let resizeTimer = null;

  function isChinese() {
    return document.documentElement.lang === 'zh-CN';
  }

  function visibleCount() {
    return window.matchMedia('(max-width: 720px)').matches ? 3 : 4;
  }

  function createHighlightedText(item) {
    const fragment = document.createDocumentFragment();
    const parts = isChinese() ? item.zh : item.en;

    parts.forEach((part) => {
      const span = document.createElement('span');
      span.textContent = part.text;
      if (part.highlight) {
        span.style.color = 'var(--accent-primary)';
        span.style.fontWeight = '650';
      }
      fragment.appendChild(span);
    });

    if (item.href) {
      fragment.appendChild(document.createTextNode(' '));
      const link = document.createElement('a');
      link.href = item.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = isChinese() ? item.linkLabelZh : item.linkLabel;
      link.style.color = 'var(--accent-primary)';
      link.style.fontWeight = '650';
      link.style.whiteSpace = 'nowrap';
      link.style.textDecoration = 'none';
      fragment.appendChild(link);
    }

    return fragment;
  }

  function createNewsRow(item) {
    const row = document.createElement('div');
    row.setAttribute('role', 'listitem');
    Object.assign(row.style, {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.85rem',
      padding: '0.8rem 0',
      borderBottom: '1px solid var(--border-color)',
      color: 'var(--text-secondary)',
      lineHeight: '1.65',
      fontSize: 'clamp(0.98rem, 1.4vw, 1.08rem)',
      willChange: 'transform, opacity'
    });

    const marker = document.createElement('span');
    marker.setAttribute('aria-hidden', 'true');
    Object.assign(marker.style, {
      width: '0.48rem',
      height: '0.48rem',
      marginTop: '0.58rem',
      borderRadius: '50%',
      background: 'var(--accent-primary)',
      flex: '0 0 auto'
    });

    const text = document.createElement('span');
    text.style.minWidth = '0';
    text.appendChild(createHighlightedText(item));

    row.append(marker, text);
    return row;
  }

  function renderWindow(track, viewport, animateIn = false) {
    const count = visibleCount();
    const rows = [];

    for (let offset = 0; offset < count; offset += 1) {
      const item = newsItems[(startIndex + offset) % newsItems.length];
      rows.push(createNewsRow(item));
    }

    track.replaceChildren(...rows);

    window.requestAnimationFrame(() => {
      const nextHeight = track.scrollHeight;
      viewport.style.height = `${nextHeight}px`;

      if (!animateIn || reducedMotion.matches) return;
      rows.forEach((row, index) => {
        row.animate(
          [
            { opacity: 0, transform: 'translateY(12px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          {
            duration: 360,
            delay: index * 55,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'both'
          }
        );
      });
    });
  }

  async function rotate(track, viewport) {
    if (paused || rotating || reducedMotion.matches || document.hidden) return;
    rotating = true;

    const rows = [...track.children];
    const animations = rows.map((row, index) => row.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-12px)' }
      ],
      {
        duration: 260,
        delay: index * 35,
        easing: 'cubic-bezier(0.4, 0, 1, 1)',
        fill: 'forwards'
      }
    ).finished.catch(() => undefined));

    await Promise.all(animations);
    startIndex = (startIndex + 1) % newsItems.length;
    renderWindow(track, viewport, true);
    rotating = false;
  }

  function scheduleRotation(track, viewport) {
    window.clearInterval(timer);
    if (reducedMotion.matches) return;
    timer = window.setInterval(() => rotate(track, viewport), rotationDelay);
  }

  function buildLatestNews() {
    if (document.getElementById(sectionId)) return;

    const home = document.getElementById('page-home');
    const welcome = home?.querySelector('.welcome-section');
    if (!home || !welcome) return;

    const section = document.createElement('section');
    section.id = sectionId;
    section.className = 'favorites-section';
    section.dataset.latestNews = 'true';
    section.setAttribute('aria-labelledby', 'latest-news-title');
    section.setAttribute('aria-roledescription', 'carousel');

    const heading = document.createElement('h2');
    heading.id = 'latest-news-title';
    heading.className = 'section-title';
    heading.textContent = isChinese() ? '最新动态' : 'Latest News';

    const viewport = document.createElement('div');
    viewport.setAttribute('aria-live', 'off');
    Object.assign(viewport.style, {
      overflow: 'hidden',
      transition: 'height 320ms cubic-bezier(0.22, 1, 0.36, 1)'
    });

    const track = document.createElement('div');
    track.setAttribute('role', 'list');
    track.setAttribute('aria-label', isChinese() ? '最新动态' : 'Latest news updates');
    track.style.display = 'grid';
    track.style.gridTemplateColumns = 'minmax(0, 1fr)';

    viewport.appendChild(track);
    section.append(heading, viewport);
    welcome.insertAdjacentElement('afterend', section);

    renderWindow(track, viewport, true);
    scheduleRotation(track, viewport);

    section.addEventListener('mouseenter', () => { paused = true; });
    section.addEventListener('mouseleave', () => { paused = false; });
    section.addEventListener('focusin', () => { paused = true; });
    section.addEventListener('focusout', () => {
      window.requestAnimationFrame(() => {
        paused = section.contains(document.activeElement);
      });
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) scheduleRotation(track, viewport);
    });

    const languageObserver = new MutationObserver(() => {
      heading.textContent = isChinese() ? '最新动态' : 'Latest News';
      track.setAttribute('aria-label', isChinese() ? '最新动态' : 'Latest news updates');
      renderWindow(track, viewport, false);
    });
    languageObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });

    reducedMotion.addEventListener?.('change', () => {
      renderWindow(track, viewport, false);
      scheduleRotation(track, viewport);
    });

    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => renderWindow(track, viewport, false), 160);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildLatestNews, { once: true });
  } else {
    buildLatestNews();
  }
})();
