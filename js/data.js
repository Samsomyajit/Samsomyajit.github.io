// ============================================
// EDITABLE DATA FILE
// Edit this file to update your website content
// No need to rebuild - changes will reflect automatically
// ============================================

// ============================================
// PUBLICATIONS DATA
// ============================================
const publications = {
  journals: [
    {
      id: 1,
      title: "Comeback or dropout: study of discontinued researchers at early career stage",
      authors: "Gayen, A., Chakraborty, S., Mitra, S. and Jana, A.",
      year: 2025,
      journal: "Scientometrics",
      pages: "1-36",
    },
    {
      id: 2,
      title: "Influence of Multi-dimensional Social Capital on Structure of Scientific Collaboration Networks: MDSC@ SciCoNet",
      authors: "Gayen, A., Chakraborty, S., Chakraborty, N. and Jana, A.",
      year: 2025,
      journal: "SN Computer Science",
      volume: "6(5)",
      pages: "394",
    },
    {
      id: 3,
      title: "Trust@ Health: A Trust-Based Multilayered Network for Scalable Healthcare Service Management",
      authors: "Gayen, A., Chakraborty, S., Chakraborty, J. and Jana, A.",
      year: 2025,
      journal: "IEEE Access",
    },
    {
      id: 4,
      title: "Enhancing wind energy forecasting in India: A site-specific comparative analysis of machine learning models and Weibull statistics using long-term data",
      authors: "Yadav, H.K., Chakraborty, S., Gupta, M.N., Bhattacharjee, A., Yadav, S., Sanyal, A.P., Sarkar, J. and Sarkar, A.",
      year: 2025,
      journal: "Sustainable Energy Technologies and Assessments",
      volume: "84",
      pages: "104735",
    },
  ],
  underReview: [
    {
      id: 5,
      title: "PIBERT: A Physics-Informed Bi-directional Hybrid Spectral Transformer for Multiscale CFD Surrogate Modeling",
      authors: "Chakraborty, S., Ming, P., and Chen, X.",
      year: 2025,
      journal: "Journal of Computational Physics",
      status: "Under review",
    },
    {
      id: 6,
      title: "Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets",
      authors: "Cheng, N., Chakraborty, S., Liu, X., Zhang, W., Liang, X., Zhao, H., Bi, W., Zhang, M., Sun, B., He, J. and Liu, Y.",
      year: 2025,
      journal: "Journal of Alloys and Compounds",
      status: "Under review",
    },
  ],
  conferences: [
    {
      id: 7,
      title: "Ml-HCN: A Novel Healthcare System Architecture Based on Multi-layered Network Approach",
      authors: "Gayen, A., Chakraborty, S., Chakraborty, J. and Jana, A.",
      year: 2024,
      conference: "15th Int. Conf. on Computing Communication & Networking Technologies (ICCCNT)",
      publisher: "IEEE",
    },
    {
      id: 8,
      title: "How Can I Grow!!: Analysis of Co-authorship Network of Early Career Stage Researchers",
      authors: "Gayen, A., Chakraborty, S., Chakraborty, N. and Jana, A.",
      year: 2024,
      conference: "Int. Conf. on Smart Computing and Communication",
      pages: "341-351",
      publisher: "Springer",
    },
    {
      id: 9,
      title: "BioGraphVAE: A Bio-inspired Autoencoder for Structured Data Reconstruction",
      authors: "Chakraborty, S., Chakraborty, D., Mondal, K., Das, S., Jana, A. and Gayen, A.",
      year: 2025,
      conference: "2nd International Symposium on Artificial Intelligence and Internet of Things (AIIoT-25)",
    },
  ],
  preprints: [
    {
      id: 10,
      title: "MedicaNet: Trust based recommender system to recommend doctors with the help of symptoms",
      authors: "Gayen, A. and Chakraborty, S.",
      year: 2020,
      journal: "Computational Intelligence and Neuroscience",
      volume: "2020(8826557)",
    },
    {
      id: 11,
      title: "LLMPR: A Novel LLM-Driven Transfer Learning based Petition Ranking Model",
      authors: "Gayen, A., Chakraborty, S., Sen, M., Paul, S. and Jana, A.",
      year: 2025,
      journal: "arXiv preprint arXiv:2505.21689",
    },
  ],
};

const scholarUrl = "https://scholar.google.com/citations?user=R9Wr3yQAAAAJ&hl=en&oi=ao";

// ============================================
// BLOG DATA
// ============================================
const blogs = [
  {
    id: 'story-so-far',
    title: 'My Story So Far!',
    category: 'Anecdotes',
    date: '2024-12-01',
    excerpt: 'A journey through my academic and professional experiences, from India to Ireland to China.',
    contentUrl: 'blogs/story-so-far.md',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    id: 'research-jedi',
    title: 'How to Use the Force! and Improve Your Research',
    category: 'Anecdotes',
    date: '2024-11-15',
    excerpt: 'Lessons learned about conducting impactful research and staying motivated in academia.',
    contentUrl: 'blogs/researchjedi.md',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800',
  },
  {
    id: 'jiaoda',
    title: 'A Thousand Miles Underfoot: My Journey at Jiaotong University',
    category: 'Anecdotes',
    date: '2024-10-01',
    excerpt: 'Reflections on starting my PhD journey at Shanghai Jiao Tong University.',
    contentUrl: 'blogs/jiaoda.md',
    image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800',
  },
  {
    id: 'myworld',
    title: 'Welcome to My Fantasy Closet',
    category: 'Anecdotes',
    date: '2024-09-20',
    excerpt: 'A peek into my fantasy-loving heart, from Star Wars wisdom to D&D character sheets and the sigil I made to remind myself who I want to be.',
    contentUrl: 'blogs/myworld.md',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
  },
  {
    id: 'comeback',
    title: 'Comeback or Dropout? What the Data Tells Us About Early Career Researchers',
    category: 'Research',
    date: '2024-09-15',
    excerpt: 'Insights from our Scientometrics paper on early career researcher dynamics.',
    contentUrl: 'blogs/comeback.md',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  },
  {
    id: 'pinns',
    title: 'PINNs in Practice: From First Principles to PyTorch',
    category: 'Research',
    date: '2024-08-20',
    excerpt: 'A practical guide to implementing Physics-Informed Neural Networks.',
    contentUrl: 'blogs/pinns.md',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
  },
];

// ============================================
// EDUCATION DATA
// ============================================
const education = [
  {
    id: 1,
    degree: 'Doctor of Philosophy',
    field: 'LLMs & Computational Fluid Dynamics',
    institution: 'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period: '2025 - 2029',
    description: 'Research focus on CFD, DEM, Simulations, LLMs, Physics Informed Machine Learning, and Computational Chemistry.',
    logo: 'assets/img/SJTU.png',
    current: true,
  },
  {
    id: 2,
    degree: 'Master of Science',
    field: 'Data Science and Analytics',
    institution: 'University College Cork',
    location: 'Cork, Ireland',
    period: '2023 - 2024',
    description: 'Thesis: "Genchron Network Analytics tool for Medieval Literature Studies" (Honours). Modules included Deep Learning, Machine Learning, Statistical Modelling, Python for Data Science.',
    logo: 'assets/img/UCC.png',
    honors: true,
  },
  {
    id: 3,
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Techno India University',
    location: 'Kolkata, India',
    period: '2018 - 2022',
    description: 'Thesis: "Scoring SM Posts using Behavioural Inputs using Social Networks". Grade: 8.27/10',
    logo: 'assets/img/TIU.png',
  },
];

// ============================================
// EXPERIENCE DATA
// ============================================
const industryExperience = [
  {
    id: 1,
    title: 'Research Assistant - AI Engineer (LLMs & GenAI)',
    company: 'University College Cork',
    location: 'Cork, Ireland',
    period: '2024 - Present',
    type: 'Research',
    highlights: [
      'Led 3 cross-domain R&D projects leveraging Large Language Models, improving scalability by 40%',
      'Developed a visual analytics platform for 20+ datasets, boosting insight extraction by 50%',
      'Designed LLM-based chatbot for real-time path accuracy using PostGIS, up by 15%',
      'Integrated GCP map plugins for geospatial features, up by 30%',
      'Evaluated chatbot responses with BLEU, ROUGE (35% improvement)',
      'Implemented RAG-based approaches for better context awareness (25% improvement)',
    ],
  },
  {
    id: 2,
    title: 'Fullstack Software Engineer - Cloud',
    company: 'Virtusa',
    location: 'Mumbai, India',
    period: '2021 - 2023',
    type: 'Industry',
    highlights: [
      'Developed 2 SaaS-based cloud apps in ServiceNow environment, reducing manual processing by 40%',
      'Led team of 8 in project development and system integration, cutting deployment time by 25%',
      'Integrated payment gateways, MFA, and AWS/GCP services, raising security compliance by 50%',
    ],
  },
];

const academicExperience = [
  {
    id: 3,
    title: 'Teaching Assistant',
    company: 'University College Cork',
    department: 'Dept. of Computer Science',
    location: 'Cork, Ireland',
    period: '2023 - 2024',
    type: 'Academic',
    highlights: [
      'Conducted Lectures on Programming with Python I',
      'Topics: Introduction to Python, Control Structures, Functions, Data Structures, Error Handling, OOP, APIs & Web Scraping, Data Processing, Visualization',
      'Data Visualization & Machine Learning fundamentals',
      'Storytelling with Data, Big Data Visualization, Dashboard Design',
    ],
  },
  {
    id: 4,
    title: 'Google Developer Club (GDG) Mentor',
    company: 'Techno India University',
    location: 'Kolkata, India',
    period: '2020 - 2022',
    type: 'Academic',
    highlights: [
      'Lectures on Machine Learning & Deep Learning with GCP',
      'Data prep with BigQuery ML, model training, deployment on GCP',
      'GCP Fundamentals, Compute & Storage, IAM, Cloud Functions, BigQuery, DevOps',
    ],
  },
];

const currentPositions = [
  {
    title: 'CGS Doctoral Fellow (PhD)',
    organization: 'Shanghai Jiao Tong University',
    department: 'Dept. of Chemical Engineering and Chemistry',
  },
  {
    title: 'Computer Scientist RA (Gen AI)',
    organization: 'University College Cork',
    department: 'Dept. of Computer Science',
  },
  {
    title: 'Visiting Lecturer',
    organization: 'Techno India University',
    department: 'Dept. of Computer Science and Engineering',
  },
  {
    title: 'Researcher',
    organization: 'CAINS Labs',
    department: 'India',
  },
];

// ============================================
// RESEARCH INTERESTS
// ============================================
const researchInterests = [
  { 
    icon: 'brain', 
    title: 'Generative AI & LLMs', 
    description: 'Large Language Models, RAG, Multi-Agent Systems' 
  },
  { 
    icon: 'atom', 
    title: 'Computational Physics', 
    description: 'CFD, PDE Solvers, Physics-Informed ML' 
  },
  { 
    icon: 'network', 
    title: 'Complex Networks', 
    description: 'Social Networks, Scientometrics, Graph Analysis' 
  },
  { 
    icon: 'sparkles', 
    title: 'AI4Science', 
    description: 'Scientific Computing, Simulations, Materials Design' 
  },
];

// ============================================
// SOCIAL LINKS
// ============================================
const socialLinks = [
  { href: 'https://www.linkedin.com/in/somyajit-sam-chakraborty/', icon: 'linkedin', label: 'LinkedIn', color: '#0077b5' },
  { href: 'https://www.researchgate.net/profile/Somyajit-Chakraborty/', icon: 'book-open', label: 'ResearchGate', color: '#00d0af' },
  { href: 'https://scholar.google.com/citations?user=R9Wr3yQAAAAJ&hl=en&oi=ao', icon: 'book-open', label: 'Google Scholar', color: '#4285f4' },
  { href: 'https://github.com/Samsomyajit', icon: 'github', label: 'GitHub', color: '#333' },
  { href: 'mailto:somyajitchppr@gmail.com', icon: 'mail', label: 'Email', color: '#ea4335' },
];

// ============================================
// PERSONAL INFO
// ============================================
const personalInfo = {
  name: 'Sam Chakraborty',
  title: 'MSc.',
  role: 'Doctoral Scholar @ Shanghai Jiao Tong University',
  tags: ['Generative AI', 'LLMs', 'Computational Physics', 'Complex Networks'],
  profileImage: 'Profi.png',
  email: 'somyajitchppr@gmail.com',
  phone: '+353 899418668',
  welcomeText: [
    'Welcome to my personal academic website. I am an AI researcher working at Shanghai Jiao Tong University specializing in AI4Science, Computational Fluid Dynamics, PDE solvers, Large Language Models, Network Science, and Agentic Systems. My work spans Language Models, Computational Intelligence, Decision Making, Cognition, Optimization, Game Research, and Physics-Informed ML.',
    "I'm open to research and technical collaborations in Mainland Europe, China, Singapore and the US. If you work on AI in Science, Physics, Social Dynamics, or innovative deep learning/optimization, let's connect and push research boundaries together."
  ],
};

// ============================================
// GITHUB USERNAME FOR PROJECTS
// ============================================
const githubUsername = 'Samsomyajit';
