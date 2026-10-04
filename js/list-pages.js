(() => {
  const root = document.querySelector('[data-list-page]');
  if (!root) return;
  const kind = root.dataset.listPage;
  const addText = (tag, text, className) => {
    const el = document.createElement(tag);
    el.textContent = text;
    if (className) el.className = className;
    return el;
  };
  const addLink = (parent, label, href) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
    parent.append(a);
  };
  const card = () => {
    const el = document.createElement('article');
    el.className = 'card';
    return el;
  };

  if (kind === 'education' && typeof education !== 'undefined') {
    root.append(addText('h1', 'Education'));
    const grid = document.createElement('div');
    grid.className = 'grid three';
    education.forEach((item) => {
      const c = card();
      c.append(addText('h2', item.institution));
      c.append(addText('p', `${item.degree} · ${item.field}`));
      c.append(addText('p', `${item.period} · ${item.location}`, 'meta'));
      c.append(addText('p', item.description));
      grid.append(c);
    });
    root.append(grid);
  }

  if (kind === 'experience') {
    root.append(addText('h1', 'Experience'));
    const all = [
      ...(typeof currentPositions !== 'undefined' ? currentPositions.map(x => ({title:x.title, company:x.organization, period:'Current', highlights:[x.department]})) : []),
      ...(typeof industryExperience !== 'undefined' ? industryExperience : []),
      ...(typeof academicExperience !== 'undefined' ? academicExperience : [])
    ];
    const grid = document.createElement('div');
    grid.className = 'grid two';
    all.forEach((item) => {
      const c = card();
      c.append(addText('h2', item.title));
      c.append(addText('p', `${item.company || ''}${item.period ? ` · ${item.period}` : ''}`));
      if (item.location) c.append(addText('p', item.location, 'meta'));
      if (item.highlights?.length) {
        const ul = document.createElement('ul');
        item.highlights.forEach(x => ul.append(addText('li', x)));
        c.append(ul);
      }
      grid.append(c);
    });
    root.append(grid);
  }

  if (kind === 'projects' && typeof projects !== 'undefined') {
    root.append(addText('h1', 'Projects'));
    const routeMap = {PIBERT:'pibert',TrustHealth:'trust-health','Trust@Health':'trust-health',LLMPR:'llmpr'};
    const grid = document.createElement('div');
    grid.className = 'grid three';
    projects.forEach((item) => {
      const c = card();
      c.append(addText('h2', item.title));
      c.append(addText('p', item.subtitle || item.description));
      c.append(addText('p', item.description, 'meta'));
      const row = document.createElement('div');
      row.className = 'link-row';
      const slug = routeMap[item.title];
      if (slug) addLink(row, 'Research page', `/research/${slug}/`);
      if (item.githubUrl) addLink(row, 'GitHub', item.githubUrl);
      if (item.paperUrl) addLink(row, 'Paper', item.paperUrl);
      c.append(row);
      grid.append(c);
    });
    root.append(grid);
  }

  if (kind === 'blog' && typeof blogs !== 'undefined') {
    root.append(addText('h1', 'Blog'));
    const grid = document.createElement('div');
    grid.className = 'grid two';
    const blogItems = [
      {
        id: 'navier-stokes-ai-discovery',
        title: 'Navier–Stokes, AI, and the Meaning of Discovery',
        category: 'Research',
        date: '2026-09-09',
        excerpt: 'A detailed reflection on the proposed Navier–Stokes blowup proof, its mathematical mechanism, the controversy around AI-assisted discovery, and what it means for scientific intelligence and physics-informed machine learning.',
        contentUrl: 'blogs/navier_stokes_ai_discovery.html'
      },
      ...blogs
    ];
    blogItems.forEach((item) => {
      const c = card();
      c.append(addText('h2', item.title));
      c.append(addText('p', `${item.category} · ${item.date}`, 'meta'));
      c.append(addText('p', item.excerpt));
      if (item.contentUrl) {
        const row = document.createElement('div');
        row.className = 'link-row';
        addLink(row, 'Read source', `/${item.contentUrl}`);
        c.append(row);
      }
      grid.append(c);
    });
    root.append(grid);
  }

  if (kind === 'publications' && typeof publications !== 'undefined') {
    root.append(addText('h1', 'Publications'));
    const latest = card();
    latest.append(addText('h2', 'Do Better Scores Mean Better Physics? Physics-Grounded Explanations for Sim2Real Neural Operators'));
    latest.append(addText('p', 'Somyajit Chakraborty; Xizhong Chen'));
    latest.append(addText('p', 'Accepted at the NeurIPS 2026 XAI4Science Workshop · non-archival workshop paper · arXiv:2610.00415.', 'meta'));
    const latestRow = document.createElement('div');
    latestRow.className = 'link-row';
    addLink(latestRow, 'Publication page', '/publications/do-better-scores/');
    addLink(latestRow, 'arXiv', 'https://arxiv.org/abs/2610.00415');
    latest.append(latestRow);
    root.append(latest);
    const groups = [['Journal articles',publications.journals],['Under review',publications.underReview],['Conference papers',publications.conferences],['Preprints',publications.preprints]];
    groups.forEach(([label,items]) => {
      root.append(addText('h2', label));
      const list = document.createElement('div');
      list.className = 'publication-list';
      (items || []).forEach((item) => {
        const c = card();
        c.append(addText('h3', item.title));
        c.append(addText('p', item.authors));
        c.append(addText('p', `${item.journal || item.conference || ''} · ${item.year}`, 'meta'));
        list.append(c);
      });
      root.append(list);
    });
  }
})();