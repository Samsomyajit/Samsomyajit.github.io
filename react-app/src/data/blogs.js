export const blogs = [
  {
    id: 'story-so-far',
    title: 'My Story So Far!',
    category: 'Anecdotes',
    date: '2026-01-15',
    excerpt: 'A journey through my academic and professional experiences, from India to Ireland to China.',
    contentUrl: '/blogs/story-so-far.md',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    id: 'research-jedi',
    title: 'How to Use the Force! and Improve Your Research',
    category: 'Anecdotes',
    date: '2026-01-10',
    excerpt: 'Lessons learned about conducting impactful research and staying motivated in academia.',
    contentUrl: '/blogs/researchjedi.md',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800',
  },
  {
    id: 'jiaoda',
    title: 'A Thousand Miles Underfoot: My Journey at Jiaotong University',
    category: 'Anecdotes',
    date: '2025-12-20',
    excerpt: 'Reflections on starting my PhD journey at Shanghai Jiao Tong University.',
    contentUrl: '/blogs/jiaoda.md',
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800',
  },
  {
    id: 'myworld',
    title: 'Welcome to My Fantasy Closet',
    category: 'Anecdotes',
    date: '2025-12-01',
    excerpt: 'A peek into my fantasy-loving heart, from Star Wars wisdom to D&D character sheets and the sigil I made to remind myself who I want to be.',
    contentUrl: '/blogs/myworld.md',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
  },
  {
    id: 'comeback',
    title: 'Comeback or Dropout? What the Data Tells Us About Early Career Researchers',
    category: 'Research',
    date: '2025-11-15',
    excerpt: 'Insights from our Scientometrics paper on early career researcher dynamics.',
    contentUrl: '/blogs/comeback.md',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  },
  {
    id: 'pinns',
    title: 'PINNs in Practice: From First Principles to PyTorch',
    category: 'Research',
    date: '2025-10-16',
    excerpt: 'A practical guide to implementing Physics-Informed Neural Networks.',
    contentUrl: '/blogs/pinns.md',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
  },
];

export const getBlogInteractions = () => {
  const stored = localStorage.getItem('blogInteractions');
  return stored ? JSON.parse(stored) : {};
};

export const saveBlogInteractions = (interactions) => {
  localStorage.setItem('blogInteractions', JSON.stringify(interactions));
};
