(() => {
  'use strict';

  const post = {
    id: 'navier-stokes-ai-discovery',
    title: 'Navier–Stokes, AI, and the Meaning of Discovery',
    category: 'Research',
    date: '2026-09-09',
    excerpt: 'A detailed reflection on the proposed Navier–Stokes blowup proof, its mathematical mechanism, the controversy around AI-assisted discovery, and what it means for scientific intelligence and physics-informed machine learning.',
    contentUrl: 'blogs/navier_stokes_ai_discovery.md',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/K%C3%A1rm%C3%A1n_vortex_street_Navier-Stokes_CFD_simulation_in_2D.gif',
  };

  if (typeof blogs !== 'undefined' && Array.isArray(blogs) && !blogs.some((item) => item.id === post.id)) {
    blogs.unshift(post);
  }
})();
