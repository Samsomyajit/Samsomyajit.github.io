(() => {
  'use strict';

  const home = document.getElementById('page-home');
  if (!home || home.querySelector('[data-latest-news]')) return;

  const newsItems = [
    {
      category: 'Training',
      title: 'Joined the 2026 DeeCamp AI4S Scientific Intelligence Training Camp',
      text: '聚焦AI4S！2026 DeeCamp科学智能训练营报名啦 →'
    },
    {
      category: 'Presentation',
      title: 'Presented WindOps Sentinel at Mindspec',
      href: 'https://www.youtube.com/watch?v=gyae5ExsYLg&t=3s',
      text: 'Watch the presentation →'
    },
    {
      category: 'Publication',
      title: 'Fourier–Wavelet CFD surrogate modelling paper released on arXiv',
      href: 'https://arxiv.org/abs/2606.24696',
      text: 'arXiv:2606.24696 · Submitted to Engineering Applications of Artificial Intelligence →'
    },
    {
      category: 'Conference',
      title: 'PacePal accepted for ICHCAI 2026 and IEEE Xplore',
      href: '/research/pacepal/',
      text: 'Halden, Norway · 27–28 May 2026 →'
    },
    {
      category: 'Patent',
      title: 'Chinese patent application CN121662209A published',
      href: 'https://patents.google.com/patent/CN121662209A/en?oq=CN121662209A',
      text: 'Multi-agent optimisation for drug-dissolution-curve prediction →'
    }
  ];

  const section = document.createElement('section');
  section.className = 'favorites-section';
  section.dataset.latestNews = 'true';

  const heading = document.createElement('h2');
  heading.className = 'section-title';
  heading.textContent = 'Latest News';

  const list = document.createElement('ul');
  list.className = 'favorites-list';

  newsItems.forEach((item) => {
    const row = document.createElement('li');
    row.className = 'fav-item animated-card';

    const category = document.createElement('span');
    category.className = 'fav-category';
    category.textContent = `${item.category}:`;

    const text = document.createElement('span');
    text.className = 'fav-text';

    const title = document.createElement('span');
    title.className = 'fav-title';
    title.textContent = item.title;
    text.appendChild(title);

    const detail = document.createTextNode(' — ');
    text.appendChild(detail);

    if (item.href) {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.text;
      if (/^https?:/.test(item.href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      text.appendChild(link);
    } else {
      text.appendChild(document.createTextNode(item.text));
    }

    row.append(category, text);
    list.appendChild(row);
  });

  section.append(heading, list);

  const reviewers = home.querySelector('.reviewers-section');
  if (reviewers) home.insertBefore(section, reviewers);
  else home.appendChild(section);
})();
