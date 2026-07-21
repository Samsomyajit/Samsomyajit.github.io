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
    return fragment;
  }

  function renderNews() {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const count = Math.min(visibleCount(), newsItems.length);
    const visible = Array.from({ length: count }, (_, offset) => newsItems[(startIndex + offset) % newsItems.length]);
    const wrapper = document.createElement('div');
    wrapper.className = 'latest-news-wrapper';
    wrapper.setAttribute('role', 'list');

    visible.forEach((item) => {
      const card = document.createElement(item.href ? 'a' : 'div');
      card.className = 'latest-news-card';
      card.setAttribute('role', 'listitem');
      if (item.href) {
        card.href = item.href;
        card.target = '_blank';
        card.rel = 'noopener';
      }
      const text = document.createElement('span');
      text.className = 'latest-news-text';
      text.appendChild(createHighlightedText(item));
      card.appendChild(text);
      if (item.href) {
        const link = document.createElement('span');
        link.className = 'latest-news-link';
        link.textContent = isChinese() ? item.linkLabelZh : item.linkLabel;
        card.appendChild(link);
      }
      wrapper.appendChild(card);
    });

    section.replaceChildren(wrapper);
  }

  function rotateNews() {
    if (paused || rotating || reducedMotion.matches) return;
    rotating = true;
    startIndex = (startIndex + 1) % newsItems.length;
    renderNews();
    rotating = false;
  }

  function scheduleRotation() {
    window.clearInterval(timer);
    if (!reducedMotion.matches) timer = window.setInterval(rotateNews, rotationDelay);
  }

  function init() {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.addEventListener('mouseenter', () => { paused = true; });
    section.addEventListener('mouseleave', () => { paused = false; });
    section.addEventListener('focusin', () => { paused = true; });
    section.addEventListener('focusout', () => { paused = false; });
    reducedMotion.addEventListener?.('change', () => {
      renderNews();
      scheduleRotation();
    });
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(renderNews, 150);
    });
    renderNews();
    scheduleRotation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
