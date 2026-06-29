(() => {
  const project = window.PROJECT_PAGE;
  const root = document.querySelector('[data-project-page]');
  if (!project || !root) return;
  const isChinese = document.documentElement.lang === 'zh-CN';
  const bilingual = (element, en, zh) => {
    element.dataset.en = en;
    element.dataset.zh = zh;
    element.textContent = isChinese ? zh : en;
    return element;
  };

  const heading = document.createElement('h1');
  heading.textContent = isChinese && project.titleZh ? project.titleZh : project.title;
  if (project.titleZh) { heading.dataset.en = project.title; heading.dataset.zh = project.titleZh; }
  const summary = document.createElement('p');
  summary.textContent = isChinese && project.summaryZh ? project.summaryZh : project.summary;
  if (project.summaryZh) { summary.dataset.en = project.summary; summary.dataset.zh = project.summaryZh; }
  root.append(heading, summary);

  const thumbnailMap = {
    '/research/pibert/': ['/assets/img/PIBERT-2.png', 'PIBERT project thumbnail'],
    '/research/trust-health/': ['/assets/img/TrustHealth.jpg', 'Trust@Health project thumbnail'],
    '/research/comeback-researchers/': ['/assets/img/Bridging.png', 'Research career re-entry project thumbnail'],
    '/research/llmpr/': ['/assets/img/MScDA.png', 'LLMPR project thumbnail']
  };
  const thumbnail = thumbnailMap[window.location.pathname];
  if (thumbnail) {
    const figure = document.createElement('figure');
    figure.className = 'project-visual';
    figure.style.margin = '2rem 0';
    const image = document.createElement('img');
    image.src = thumbnail[0];
    image.alt = thumbnail[1];
    figure.appendChild(image);
    root.appendChild(figure);
  }

  const sections = [
    ['Research problem','研究问题',project.problem,project.problemZh],
    ['Main contributions','主要贡献',project.contributions,project.contributionsZh],
    ['Authors and affiliations','作者与机构',project.authors,project.authorsZh],
    ['Publication status','出版状态',project.status,project.statusZh],
    ['Links','链接',project.links,null],
    ['Recommended citation','推荐引用',project.citation,null],
    ['Related research','相关研究',project.related,null],
    ['Frequently asked questions','常见问题',project.faq,project.faqZh]
  ];

  sections.forEach(([title, titleZh, value, valueZh]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return;
    const section = document.createElement('section');
    section.append(bilingual(document.createElement('h2'), title, titleZh));
    if (Array.isArray(value)) {
      const list = document.createElement('ul');
      value.forEach((item, index) => {
        const li = document.createElement('li');
        const translated = Array.isArray(valueZh) ? valueZh[index] : null;
        if (typeof item === 'string') {
          li.textContent = isChinese && translated ? translated : item;
          if (translated) { li.dataset.en = item; li.dataset.zh = translated; }
        } else {
          const a = document.createElement('a');
          a.href = item.href;
          a.textContent = isChinese && item.labelZh ? item.labelZh : item.label;
          if (item.labelZh) { a.dataset.en = item.label; a.dataset.zh = item.labelZh; }
          if (item.external) { a.target = '_blank'; a.rel = 'noopener'; }
          li.append(a);
        }
        list.append(li);
      });
      section.append(list);
    } else {
      const p = document.createElement('p');
      p.textContent = isChinese && valueZh ? valueZh : value;
      if (valueZh) { p.dataset.en = value; p.dataset.zh = valueZh; }
      section.append(p);
    }
    root.append(section);
  });

  const structured = document.createElement('script');
  structured.type = 'application/ld+json';
  structured.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': project.schemaType || 'ResearchProject',
    name: project.title,
    description: project.summary,
    url: window.location.href,
    image: thumbnail ? new URL(thumbnail[0], window.location.origin).href : undefined,
    author: { '@type': 'Person', '@id': 'https://samchakraborty.me/#person', name: 'Somyajit Chakraborty' }
  });
  document.head.append(structured);
})();
