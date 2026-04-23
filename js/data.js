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
    id: 'china-india-development',
    title: 'Why China Pulled Ahead While India Moved More Slowly: Work, State Capacity, and the Politics of Development',
    category: 'Research',
    date: '2026-04-23',
    excerpt: 'A comparative analysis of how state capacity, labour transformation, and social aspiration shaped divergent development trajectories in China and India.',
    contentUrl: 'blogs/china_india_development_blog.md',
    image: 'assets/img/blogs/china-india-development-thumbnail.svg',
  },
  {
    id: 'feminism-soft-heart',
    title: 'Feminism, Men, and the Discipline of a Soft Heart',
    category: 'Anecdotes',
    date: '2026-03-23',
    excerpt: 'A personal reflection on what feminism means for men, the moral capacity of a soft heart, and how married life with Yanrong has made questions of dignity and care real and immediate.',
    contentUrl: 'blogs/feminism_soft_heart_reflection.md',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
  },
  {
    id: 'science-unity-essay',
    title: 'Science, History, Philosophy, and the Unity of Knowledge',
    category: 'Research',
    date: '2026-03-23',
    excerpt: 'Exploring how science is deeply entangled with history, philosophy, and the arts — and why understanding science means understanding its human and intellectual context.',
    contentUrl: 'blogs/science_unity_essay_harvard.md',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800',
  },
  {
    id: 'reading-writing-essay',
    title: 'Reading, Writing, and the Craft of the Essay',
    category: 'Research',
    date: '2026-03-23',
    excerpt: 'How reading and writing are mutually dependent acts, and how scientific writing frameworks like IMRAD and PMRC can strengthen even general essay writing.',
    contentUrl: 'blogs/reading_writing_essay_pmrc_imrad.md',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
  },
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
// PROJECTS DATA
// ============================================
const projects = [
  {
    id: 1,
    title: 'PIBERT',
    subtitle: 'Physics-Informed Bi-directional Hybrid Spectral Transformer for Multiscale CFD',
    description: 'A novel Physics-Informed Bi-directional Hybrid Spectral Transformer for multiscale CFD surrogate modeling. Combines physics constraints with transformer architectures to accelerate high-fidelity fluid dynamics simulations.',
    image: 'assets/img/PIBERT-2.png',
    tags: ['Physics-Informed ML', 'Transformers', 'CFD', 'PDE Solvers', 'Python'],
    category: 'AI & Computational Physics',
    githubUrl: 'https://github.com/Samsomyajit',
    paperUrl: 'https://arxiv.org/',
    projectUrl: 'https://samsomyajit.github.io/pibert/',
    featured: true,
    year: 2025,
    language: 'Python',
  },
  {
    id: 2,
    title: 'Trust@Health',
    subtitle: 'Trust-Based Multilayered Network for Healthcare Service Management',
    description: 'A scalable multilayered network model for healthcare service management leveraging trust metrics. Enables robust, privacy-preserving doctor-patient recommendations and service routing in distributed healthcare systems.',
    image: 'assets/img/TrustHealth.jpg',
    tags: ['Complex Networks', 'Healthcare AI', 'Graph Analysis', 'Python'],
    category: 'Network Science',
    githubUrl: 'https://github.com/Samsomyajit',
    paperUrl: 'https://ieeexplore.ieee.org/',
    featured: true,
    year: 2025,
    language: 'Python',
  },
  {
    id: 3,
    title: 'Wind Energy Forecasting ML',
    subtitle: 'Site-Specific Comparative ML Analysis for Wind Energy',
    description: 'Comparative analysis of machine learning models and Weibull statistics using long-term meteorological data for wind energy forecasting in India. Achieves high site-specific accuracy across diverse geographic regions.',
    image: 'assets/img/enhancing-wind-energy-forecasting-india.jpg',
    tags: ['Machine Learning', 'Renewable Energy', 'Time Series', 'Python'],
    category: 'AI & Science',
    githubUrl: 'https://github.com/Samsomyajit',
    paperUrl: 'https://www.sciencedirect.com/',
    featured: true,
    year: 2025,
    language: 'Python',
  },
  {
    id: 4,
    title: 'Genchron',
    subtitle: 'Network Analytics Tool for Medieval Literature Studies',
    description: 'MSc thesis project: a visual network analytics platform for exploring chronological and relational patterns in medieval literary corpora. Enables interactive graph-based exploration of co-authorship and thematic networks.',
    image: 'assets/img/Bridging.png',
    tags: ['Network Analytics', 'Data Visualization', 'NLP', 'JavaScript', 'Python'],
    category: 'Network Science',
    githubUrl: 'https://github.com/Samsomyajit',
    featured: false,
    year: 2024,
    language: 'Python',
  },
  {
    id: 5,
    title: 'LLMPR',
    subtitle: 'LLM-Driven Transfer Learning Petition Ranking Model',
    description: 'A novel LLM-driven transfer learning framework for ranking public petitions by relevance and urgency. Combines fine-tuned language models with domain-specific features to surface high-impact civic requests.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    tags: ['LLMs', 'Transfer Learning', 'NLP', 'Python'],
    category: 'Generative AI & LLMs',
    githubUrl: 'https://github.com/Samsomyajit',
    paperUrl: 'https://arxiv.org/abs/2505.21689',
    featured: false,
    year: 2025,
    language: 'Python',
  },
  {
    id: 6,
    title: 'BioGraphVAE',
    subtitle: 'Bio-Inspired Autoencoder for Structured Data Reconstruction',
    description: 'A bio-inspired variational autoencoder that leverages graph-structured latent spaces to reconstruct complex structured data. Draws inspiration from biological neural connectivity patterns to improve representation learning.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    tags: ['VAE', 'Graph Neural Networks', 'Deep Learning', 'Python'],
    category: 'AI & Science',
    githubUrl: 'https://github.com/Samsomyajit',
    projectUrl: 'http://samchakraborty.me/BioGraphVAE/',
    featured: false,
    year: 2025,
    language: 'Python',
  },
  {
    id: 7,
    title: 'MedicaNet',
    subtitle: 'Trust-Based Doctor Recommender System',
    description: 'A trust-based recommender system that matches patients to relevant doctors using symptom profiles and social trust signals from healthcare networks. Combines collaborative filtering with graph-based trust propagation.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    tags: ['Recommender Systems', 'Healthcare AI', 'Graph ML', 'Python'],
    category: 'Network Science',
    githubUrl: 'https://github.com/Samsomyajit',
    featured: false,
    year: 2020,
    language: 'Python',
  },
  {
    id: 8,
    title: 'Step Up',
    subtitle: 'Technology-enabled self-persuasion empowerment tools to increase walking',
    description: 'Technology-enabled self-persuasion empowerment tools to increase walking in middle-aged and older citizens. This project develops intelligent digital interventions that motivate and sustain physical activity through personalised, evidence-based persuasive strategies.',
    image: 'https://www.sfi.ie/__uuid/981cab89-b3e9-4983-a8f3-3a8e69444cf7/iStock-84486384.jpg',
    tags: ['Digital Health', 'Persuasive Technology', 'mHealth', 'Older Adults', 'Behaviour Change'],
    category: 'Digital Health & Wellbeing',
    githubUrl: 'https://github.com/Samsomyajit',
    projectUrl: 'https://www.sfi.ie/challenges/sustainable-communities-challenge/Step-Up/',
    fundingIcon: 'https://github.com/user-attachments/assets/763a57c0-3603-4748-b86f-1bb063f89983',
    fundingLabel: 'Funded by Taighde Éireann',
    featured: true,
    year: 2025,
    language: 'Python',
  },
  {
    id: 9,
    title: 'WindPulse',
    subtitle: 'Heat Map-Based Clustered Diurnal Wind Power Density Analysis for Optimized Maintenance Scheduling',
    description: 'An advanced analytics platform that leverages heat map visualizations and clustering algorithms on diurnal wind power density patterns to optimize maintenance scheduling for wind farms across India, enabling data-driven decisions that maximize uptime and energy production efficiency.',
    image: 'assets/img/enhancing-wind-energy-forecasting-india.jpg',
    tags: ['Wind Energy', 'Clustering', 'Data Visualization', 'Machine Learning', 'Python'],
    category: 'AI & Science',
    githubUrl: 'https://github.com/Samsomyajit/windpulse',
    projectUrl: 'https://samsomyajit.github.io/windpulse/',
    featured: true,
    year: 2025,
    language: 'Python',
  },
];

// ============================================
// GITHUB USERNAME FOR PROJECTS
// ============================================
const githubUsername = 'Samsomyajit';
