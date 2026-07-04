(() => {
  'use strict';

  const post = {
    id: 'why-i-chose-china',
    title: 'Why I Chose China: A Personal Journey from India and Ireland to Shanghai',
    category: 'Anecdotes',
    date: '2026-07-04',
    excerpt: 'A book-like personal essay on colonial aspiration, loneliness, literature, Ireland, love, marriage, scientific ambition, and choosing China as a future rather than a fallback.',
    contentUrl: 'blogs/why_i_chose_china.md',
    image: 'assets/img/blogs/why-china-thumbnail.svg',
  };

  if (typeof blogs !== 'undefined' && Array.isArray(blogs) && !blogs.some((item) => item.id === post.id)) {
    blogs.unshift(post);
  }
})();
