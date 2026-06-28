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
    blogs.forEach((item) => {
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
    latest.append(addText('h2', 'PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being'));
    latest.append(addText('p', 'Somyajit Chakraborty; Muhammad Shoaib; Rosane Minghim; Mujahid Tabassum'));
    latest.append(addText('p', 'Accepted for ICHCAI 2026 and IEEE Xplore publication, subject to revisions and publication checks.', 'meta'));
    const latestRow = document.createElement('div');
    latestRow.className = 'link-row';
    addLink(latestRow, 'Project page', '/research/pacepal/');
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