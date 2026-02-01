export const blogs = [
  {
    id: 'story-so-far',
    title: 'My Story So Far!',
    category: 'Anecdotes',
    date: '2024-12-01',
    excerpt: 'A journey through my academic and professional experiences, from India to Ireland to China.',
    contentUrl: '/blogs/story-so-far.md',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    id: 'research-jedi',
    title: 'How to Use the Force! and Improve Your Research',
    category: 'Anecdotes',
    date: '2024-11-15',
    excerpt: 'Lessons learned about conducting impactful research and staying motivated in academia.',
    contentUrl: '/blogs/researchjedi.md',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800',
  },
  {
    id: 'jiaoda',
    title: 'A Thousand Miles Underfoot: My Journey at Jiaotong University',
    category: 'Anecdotes',
    date: '2024-10-01',
    excerpt: 'Reflections on starting my PhD journey at Shanghai Jiao Tong University.',
    contentUrl: '/blogs/jiaoda.md',
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800',
  },
  {
    id: 'comeback',
    title: 'Comeback or Dropout? What the Data Tells Us About Early Career Researchers',
    category: 'Research',
    date: '2024-09-15',
    excerpt: 'Insights from our Scientometrics paper on early career researcher dynamics.',
    contentUrl: '/blogs/comeback.md',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  },
  {
    id: 'pinns',
    title: 'PINNs in Practice: From First Principles to PyTorch',
    category: 'Research',
    date: '2024-08-20',
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
