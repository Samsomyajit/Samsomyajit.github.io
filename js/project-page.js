(() => {
  const project = window.PROJECT_PAGE;
  const root = document.querySelector('[data-project-page]');
  if (!project || !root) return;

  const heading = document.createElement('h1');
  heading.textContent = project.title;
  const summary = document.createElement('p');
  summary.textContent = project.summary;
  root.append(heading, summary);

  const sections = [
    ['Research problem', project.problem],
    ['Main contributions', project.contributions],
    ['Authors and affiliations', project.authors],
    ['Publication status', project.status],
    ['Links', project.links],
    ['Recommended citation', project.citation],
    ['Related research', project.related],
    ['Frequently asked questions', project.faq]
  ];

  sections.forEach(([title, value]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return;
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    section.append(h2);
    if (Array.isArray(value)) {
      const list = document.createElement('ul');
      value.forEach((item) => {
        const li = document.createElement('li');
        if (typeof item === 'string') li.textContent = item;
        else {
          const a = document.createElement('a');
          a.href = item.href;
          a.textContent = item.label;
          if (item.external) { a.target = '_blank'; a.rel = 'noopener'; }
          li.append(a);
        }
        list.append(li);
      });
      section.append(list);
    } else {
      const p = document.createElement('p');
      p.textContent = value;
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
    author: { '@type': 'Person', '@id': 'https://samchakraborty.me/#person', name: 'Somyajit Chakraborty' }
  });
  document.head.append(structured);
})();