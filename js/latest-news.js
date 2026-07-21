(() => {
  'use strict';

  const sectionId = 'latest-news-section';
  const rotationDelay = 4800;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const newsItems = [
    {
      en: [
        { text: 'New publication: ' },
        { text: 'Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets', highlight: true },
        { text: ' published in ' },
        { text: 'Journal of the American Ceramic Society', highlight: true },
        { text: '. DOI: 10.1111/jace.71067.' }
      ],
      zh: [
        { text: '新论文：' },
        { text: 'Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets', highlight: true },
        { text: ' 已在 ' },
        { text: 'Journal of the American Ceramic Society', highlight: true },
        { text: ' 发表。DOI：10.1111/jace.71067。' }
      ],
      href: 'https://doi.org/10.1111/jace.71067',
      linkLabel: 'View DOI →',
      linkLabelZh: '查看 DOI →'
    },
    {
      en: [
        { text: 'PharmaDissolve-MCP', highlight: true },
        { text: ' featured in the ' },
        { text: 'AI4Science Hackathon at Shanghai Jiao Tong University', highlight: true },
        { text: ' with Sam C, Lin Leqi, and Zhou Xingyu.' }
      ],
      zh: [
        { text: 'PharmaDissolve-MCP', highlight: true },
        { text: ' 入选/展示于 ' },
        { text: '上海交通大学 AI4Science Hackathon', highlight: true },
        { text: '，团队成员：Sam C、林乐齐、周星宇。' }
      ],
      href: 'https://ai4.science/events/shanghai-hackathon',
      linkLabel: 'View event →',
      linkLabelZh: '查看活动 →'
    },
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
        { text: ' published by ' },
        { text: 'Springer Nature Switzerland', highlight: true },
        { text: ' in ' },
        { text: 'CCIS volume 3025', highlight: true },
        { text: ', pages 1–15.' }
      ],
      zh: [
        { text: 'CenterDistill', highlight: true },
        { text: ' 已由 ' },
        { text: 'Springer Nature Switzerland', highlight: true },
        { text: ' 出版，收录于 ' },
        { text: 'CCIS 第 3025 卷', highlight: true },
        { text: '，第 1–15 页。' }
      ],
      href: 'https://doi.org/10.1007/978-3-032-31141-2_11',
      linkLabel: 'View publication →',
      linkLabelZh: '查看论文 →'
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

  const isChinese = () => document.documentElement.lang === 'zh-CN';
  const visibleCount = () => window.matchMedia('(max-width: 720px)').matches ? 3 : 4;

  function createText(item) {
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

  function createRow(item) {
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
      fontSize: 'clamp(0.98rem, 1.4vw, 1.08rem)'
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
    text.appendChild(createText(item));
    row.append(marker, text);
    return row;
  }

  function ensureSection() {
    let section = document.getElementById(sectionId);
    if (section) return section;

    const home = document.getElementById('page-home');
    const welcome = home?.querySelector('.welcome-section');
    if (!home || !welcome) return null;

    section = document.createElement('section');
    section.id = sectionId;
    section.className = 'favorites-section';
    section.dataset.latestNews = 'true';
    section.setAttribute('aria-labelledby', 'latest-news-title');

    const heading = document.createElement('h2');
    heading.id = 'latest-news-title';
    heading.className = 'section-title';
    heading.textContent = isChinese() ? '最新动态' : 'Latest News';

    const track = document.createElement('div');
    track.dataset.latestNewsTrack = 'true';
    track.setAttribute('role', 'list');
    track.setAttribute('aria-label', isChinese() ? '最新动态' : 'Latest news updates');

    section.append(heading, track);
    welcome.insertAdjacentElement('afterend', section);
    return section;
  }

  function render() {
    const section = ensureSection();
    if (!section) return;

    const heading = section.querySelector('#latest-news-title');
    const track = section.querySelector('[data-latest-news-track]');
    if (!track) return;

    if (heading) heading.textContent = isChinese() ? '最新动态' : 'Latest News';
    track.setAttribute('aria-label', isChinese() ? '最新动态' : 'Latest news updates');

    const count = Math.min(visibleCount(), newsItems.length);
    const rows = Array.from({ length: count }, (_, offset) =>
      createRow(newsItems[(startIndex + offset) % newsItems.length])
    );
    track.replaceChildren(...rows);
  }

  function scheduleRotation() {
    window.clearInterval(timer);
    if (reducedMotion.matches) return;
    timer = window.setInterval(() => {
      if (paused || document.hidden) return;
      startIndex = (startIndex + 1) % newsItems.length;
      render();
    }, rotationDelay);
  }

  function init() {
    const section = ensureSection();
    if (!section) return;

    section.addEventListener('mouseenter', () => { paused = true; });
    section.addEventListener('mouseleave', () => { paused = false; });
    section.addEventListener('focusin', () => { paused = true; });
    section.addEventListener('focusout', () => { paused = false; });

    new MutationObserver(render).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });

    window.addEventListener('resize', render);
    document.addEventListener('visibilitychange', scheduleRotation);
    reducedMotion.addEventListener?.('change', scheduleRotation);

    render();
    scheduleRotation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
