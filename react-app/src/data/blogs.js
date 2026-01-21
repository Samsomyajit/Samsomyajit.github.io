export const blogs = [
  {
    id: 'story-so-far',
    title: 'My Story So Far!',
    category: 'Anecdotes',
    date: '2024-12-01',
    excerpt: 'A journey through my academic and professional experiences, from India to Ireland to China.',
    content: `
      My journey began in Kolkata, India, where I developed a passion for computer science and mathematics. 
      After completing my Bachelor's degree in Computer Science & Engineering from Techno India University, 
      I worked as a Full-stack Software Engineer at Virtusa, gaining valuable industry experience in cloud 
      computing and SaaS applications.
      
      The desire to pursue research led me to University College Cork, Ireland, where I completed my Master's 
      in Data Science and Analytics. My thesis on "Genchron Network Analytics tool for Medieval Literature Studies" 
      combined my love for data science with humanities research.
      
      Now, I'm embarking on a new chapter as a Doctoral Scholar at Shanghai Jiao Tong University, focusing on 
      AI4Science, Computational Fluid Dynamics, and Large Language Models. The future is exciting, and I'm 
      grateful for every step of this journey.
    `,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    id: 'research-jedi',
    title: 'How to Use the Force! and Improve Your Research',
    category: 'Anecdotes',
    date: '2024-11-15',
    excerpt: 'Lessons learned about conducting impactful research and staying motivated in academia.',
    content: `
      Research is a marathon, not a sprint. Here are some key lessons I've learned along the way:
      
      1. **Start with Why**: Always understand the bigger picture. Why is your research important?
      
      2. **Collaborate Widely**: The best research happens at the intersection of disciplines. Don't be afraid 
         to reach out to researchers in different fields.
      
      3. **Document Everything**: Keep detailed notes, code comments, and experiment logs. Your future self 
         will thank you.
      
      4. **Embrace Failure**: Failed experiments are still experiments. They teach you what doesn't work, 
         which is equally valuable.
      
      5. **Stay Curious**: Read widely, attend conferences, and never stop learning. The best researchers 
         are perpetual students.
    `,
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800',
  },
  {
    id: 'jiaoda',
    title: 'A Thousand Miles Underfoot: My Journey at Jiaotong University',
    category: 'Anecdotes',
    date: '2024-10-01',
    excerpt: 'Reflections on starting my PhD journey at Shanghai Jiao Tong University.',
    content: `
      Moving to Shanghai for my PhD has been one of the most transformative experiences of my life. 
      Shanghai Jiao Tong University (SJTU), known locally as Jiaoda, is a world-class institution with 
      a rich history and vibrant research culture.
      
      The campus is beautiful, blending traditional Chinese architecture with modern facilities. The 
      research environment is incredibly stimulating, with access to cutting-edge equipment and brilliant 
      minds from around the world.
      
      Living in Shanghai has also been an adventure. The city's blend of ancient culture and futuristic 
      technology is fascinating. From the historic Bund to the towering Lujiazui skyline, every day 
      brings new discoveries.
    `,
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800',
  },
  {
    id: 'comeback',
    title: 'Comeback or Dropout? What the Data Tells Us About Early Career Researchers',
    category: 'Research',
    date: '2024-09-15',
    excerpt: 'Insights from our Scientometrics paper on early career researcher dynamics.',
    content: `
      Our recent paper in Scientometrics examines the fascinating patterns of early career researchers 
      who discontinue their academic careers but later make a comeback.
      
      Key findings:
      - Approximately 30% of researchers who take a break return within 5 years
      - Collaboration networks play a crucial role in facilitating comebacks
      - Industry experience often brings valuable perspectives back to academia
      - Mentorship during the comeback phase significantly impacts long-term success
      
      This research has important implications for academic institutions and funding bodies in supporting 
      diverse career paths in science.
    `,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  },
  {
    id: 'pinns',
    title: 'PINNs in Practice: From First Principles to PyTorch',
    category: 'Research',
    date: '2024-08-20',
    excerpt: 'A practical guide to implementing Physics-Informed Neural Networks.',
    content: `
      Physics-Informed Neural Networks (PINNs) represent a paradigm shift in scientific computing, 
      combining the power of deep learning with the rigor of physics.
      
      In this post, I'll walk through:
      
      1. **The Theory**: How PINNs incorporate physical laws directly into the loss function
      
      2. **Implementation**: Step-by-step PyTorch code for solving differential equations
      
      3. **Best Practices**: Tips for training stability and accuracy
      
      4. **Applications**: Real-world examples in fluid dynamics and heat transfer
      
      PINNs have become a cornerstone of my research at SJTU, and I hope this guide helps others 
      get started with this powerful technique.
    `,
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
