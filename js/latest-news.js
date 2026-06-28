(() => {
  'use strict';

  const sectionId = 'latest-news-section';
  const newsItems = [
    {
      category: 'Programme',
      categoryZh: '项目',
      text: 'Joined the 2026 DeeCamp AI4S Training Camp (聚焦AI4S！2026 DeeCamp科学智能训练营).',
      textZh: '加入 2026 DeeCamp 科学智能训练营（聚焦 AI4S）。'
    },
    {
      category: 'Presentation',
      categoryZh: '报告',
      text: 'Presented WindOps Sentinel at MindSpec.',
      textZh: '在 MindSpec 展示 WindOps Sentinel。',
      href: 'https://www.youtube.com/watch?v=gyae5ExsYLg&t=3s',
      linkLabel: 'Watch presentation →',
      linkLabelZh: '观看演示 →'
    },
    {
      category: 'Accepted',
      categoryZh: '录用',
      text: 'CenterDistill accepted at CORE EANN / EAAAI 2026.',
      textZh: 'CenterDistill 被 CORE EANN / EAAAI 2026 录用。'
    },
    {
      category: 'New paper',
      categoryZh: '新论文',
      text: 'A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling.',
      textZh: '新论文：面向多尺度计算流体力学代理建模的物理信息 Fourier-Wavelet Transformer。',
      href: 'https://arxiv.org/abs/2606.24696',
      linkLabel: 'Read on arXiv →',
      linkLabelZh: '在 arXiv 阅读 →'
    },
    {
      category: 'Collaboration',
      categoryZh: '合作',
      text: 'Started working with Dr. Danny H. Van Der Haven on Porosity from Drag Experiments, in collaboration with Global Labs.',
      textZh: '开始与 Danny H. Van Der Haven 博士及 Global Labs 合作开展基于阻力实验的孔隙率研究。'
    },
    {
      category: 'Industry',
      categoryZh: '产业合作',
      text: 'Industrial partnership with a Beijing-based corporation on a pipeline digital twin for CFD analysis.',
      textZh: '与北京企业开展管道数字孪生与 CFD 分析产业合作。'
    }
  ];

  function isChinese() {
    return document.documentElement.lang === 'zh-CN';
  }

  function updateLanguage(section) {
    if (!section) return;
    const chinese = isChinese();
    const heading = section.querySelector('[data-news-heading]');
    if (heading) heading.textContent = chinese ? '最新动态' : 'Latest News';

    section.querySelectorAll('[data-news-index]').forEach((row) => {
      const item = newsItems[Number(row.dataset.newsIndex)];
      if (!item) return;

      const category = row.querySelector('[data-news-category]');
      const text = row.querySelector('[data-news-text]');
      const link = row.querySelector('[data-news-link]');

      if (category) category.textContent = `${chinese ? item.categoryZh : item.category}:`;
      if (text) text.textContent = chinese ? item.textZh : item.text;
      if (link) link.textContent = chinese ? item.linkLabelZh : item.linkLabel;
    });
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

    const heading = document.createElement('h2');
    heading.id = 'latest-news-title';
    heading.className = 'section-title';
    heading.dataset.newsHeading = 'true';
    heading.textContent = 'Latest News';

    const list = document.createElement('ul');
    list.className = 'favorites-list';

    newsItems.forEach((item, index) => {
      const row = document.createElement('li');
      row.className = 'fav-item';
      row.dataset.newsIndex = String(index);

      const category = document.createElement('span');
      category.className = 'fav-category';
      category.dataset.newsCategory = 'true';
      category.textContent = `${item.category}:`;

      const content = document.createElement('span');
      content.className = 'fav-text';

      const text = document.createElement('span');
      text.dataset.newsText = 'true';
      text.textContent = item.text;
      content.appendChild(text);

      if (item.href) {
        content.appendChild(document.createTextNode(' '));
        const link = document.createElement('a');
        link.href = item.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'fav-title';
        link.dataset.newsLink = 'true';
        link.textContent = item.linkLabel;
        content.appendChild(link);
      }

      row.append(category, content);
      list.appendChild(row);
    });

    section.append(heading, list);
    welcome.insertAdjacentElement('afterend', section);
    updateLanguage(section);

    const observer = new MutationObserver(() => updateLanguage(section));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildLatestNews, { once: true });
  } else {
    buildLatestNews();
  }
})();
