(() => {
  'use strict';

  const cleanUrl = '/blog/do-better-scores-physics/';
  const post = {
    id: 'do-better-scores-physics',
    title: 'Do Better Scores Mean Better Physics? What We Learned from Sim2Real Neural Operators',
    category: 'Research',
    date: '2026-10-04',
    excerpt: 'Why a lower neural-operator prediction error can still hide a worse physical forecast, and what that means for evaluating scientific AI.',
    contentUrl: 'blogs/do_better_scores_mean_better_physics.md',
    image: 'assets/img/do-better-scores-blog-cover.svg',
    permalink: cleanUrl,
  };

  if (typeof blogs !== 'undefined' && Array.isArray(blogs)) {
    const existing = blogs.find((item) => item.id === post.id);
    if (existing) Object.assign(existing, post);
    else blogs.unshift(post);
    blogs.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  }

  document.addEventListener('click', (event) => {
    const card = event.target.closest?.('.blog-card');
    if (!card) return;
    const handler = card.getAttribute('onclick') || '';
    if (!handler.includes("do-better-scores-physics")) return;
    event.preventDefault();
    event.stopPropagation();
    window.location.assign(cleanUrl);
  }, true);
})();