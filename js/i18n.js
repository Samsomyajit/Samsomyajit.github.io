// ============================================
// LANGUAGE PACK — English & Simplified Chinese
// ============================================

const translations = {
  en: {
    // Nav
    'nav.logo':            'Somyajit Chakraborty, PhD.',
    'nav.home':            'Home',
    'nav.publications':    'Publications',
    'nav.projects':        'Projects',
    'nav.education':       'Education',
    'nav.experience':      'Experience',
    'nav.blog':            'Blog',

    // Hero
    'hero.badge':          'Shanghai Jiao Tong University · CGS Doctoral Fellow',
    'hero.role':           'Physical AI Researcher · LLMs, CFD & Complex Networks',
    'hero.tag1':           'AI4Science',
    'hero.tag2':           'LLMs & AI Agents',
    'hero.tag3':           'Computational Physics',
    'hero.tag4':           'Complex Networks',
    'hero.pos1':           'PhD Scholar, Dept. of Chemical Engineering — SJTU',
    'hero.pos2':           'Research Assistant (Gen AI) — University College Cork',
    'hero.pos3':           'Visiting Lecturer — Techno India University',
    'hero.cta.pubs':       'View Publications',
    'hero.cta.projects':   'Explore Projects',

    // Home — Welcome
    'section.welcome':     'Welcome',
    'welcome.p1':          'I am a PhD student at <strong>Shanghai Jiao Tong University (SJTU)</strong> in the School of Chemical Engineering and Chemistry, where I work on <strong>AI for Scientific Simulation, Physical AI, and Computational Modeling</strong> under the supervision of <strong>Professor Chen Xizhong</strong>. My long-term research vision is to develop intelligent systems that can accelerate scientific simulation, surrogate modeling, design, optimization, and discovery in complex physical and industrial systems through machine learning.',
    'welcome.p2':          'Before starting my PhD, I completed my <strong>Master\'s at University College Cork</strong> under the mentorship of <strong>Professor Rosane Minghim</strong>, a highly respected researcher in visual analytics, data visualization, and scientific data analysis. I also hold a <strong>B.Tech. in Computer Science and Engineering</strong> from <strong>Techno India University</strong>. My academic and research journey spans AI, scientific machine learning, computational physics, generative modeling, complex networks, and data-driven discovery.',
    'welcome.p3':          'My current research interests include:',
    'welcome.interest1':   '<strong>(1) Core AI and Foundation Models:</strong> Developing advanced machine learning models, including transformers, generative AI, scientific foundation models, and agentic AI systems for reasoning, simulation, and decision support in scientific domains.',
    'welcome.interest2':   '<strong>(2) AI for Physical Sciences and Engineering:</strong> Building physics-informed and data-driven AI systems for CFD, PDE surrogate modeling, multiscale scientific simulation, process optimization, and scientific computing, with the broader goal of enabling more reliable and efficient simulation-assisted engineering.',
    'welcome.interest3':   '<strong>(3) AI for Scientific Discovery and Energy:</strong> Designing AI methods that support inverse design, scientific hypothesis generation, interpretable modeling, and hybrid simulation-learning workflows across chemistry, fluid systems, energy systems, and industrial processes.',
    'welcome.interest4':   '<strong>(4) AI for Pharmaceutical Research:</strong> Exploring AI-driven automation, micro/nano-robotics for surgical and medical tasks, drug and capsule design using Physical AI, DEM-FEM coupling, pharmaceutical manufacturing, and digital twins for medical and drug-delivery systems.',
    'welcome.p4':          'My broader goal is to contribute to the next generation of <strong>Physical and Cognitive AI</strong>, where AI not only predicts outcomes, but also helps scientists and engineers simulate, understand, control, and discover complex real-world systems more effectively, while moving toward systems with stronger reasoning, autonomy, and scientific cognition.',
    'welcome.p5':          'I am open to research and technical collaborations in Mainland Europe, China, Singapore, and the United States. If you work on AI for Science, physics, scientific discovery, or advanced machine learning for real-world systems, I would be glad to connect.',

    // Home — Research Interests
    'section.interests':        'Research Interests',
    'interest.llm.title':       'AI agents & LLMs',
    'interest.llm.desc':        'Large Language Models, RAG, Multi-Agent Systems',
    'interest.physics.title':   'Computational Physics',
    'interest.physics.desc':    'CFD, PDE Solvers, Physics-Informed ML',
    'interest.networks.title':  'Complex Networks',
    'interest.networks.desc':   'Social Networks, Scientometrics, Cognitive Networks',
    'interest.ai4sci.title':    'AI4Science',
    'interest.ai4sci.desc':     'Scientific Computing, Simulations, Materials Design',

    // Home — Explore
    'section.explore':          'Explore',
    'explore.pubs.title':       'Publications',
    'explore.pubs.desc':        'Journals, Conferences, Preprints & Patents',
    'explore.projects.title':   'Projects',
    'explore.projects.desc':    'GitHub Repositories & Code',
    'explore.blog.title':       'Blog',
    'explore.blog.desc':        'Research & Anecdotes',

    // Home — Reviewer & Favorites
    'section.reviewer':         'Reviewer',
    'section.favorites':        'My Favorites',
    'fav.future.cat':           'Future:',
    'fav.video.cat':            'Video:',
    'fav.scifi.cat':            'Sci-fi show:',
    'fav.novel.cat':            'Sci-fi novel:',

    // Publications Page
    'pub.page.title':           'Publications',
    'pub.page.subtitle':        'My research contributions spanning AI, Network Science, Healthcare, and Computational Physics',
    'pub.scholar.link':         'View on Google Scholar',
    'pub.kpi.journals':         'Journals',
    'pub.kpi.conferences':      'Conferences',
    'pub.kpi.review':           'Under Review',
    'pub.kpi.preprints':        'Preprints',
    'pub.kpi.patents':          'Patents',
    'pub.kpi.total':            'Total',
    'pub.section.selected':     'Selected Publications',
    'pub.section.journals':     'Journal Articles',
    'pub.section.review':       'Under Review',
    'pub.section.conferences':  'Conference Proceedings',
    'pub.section.preprints':    'Preprints',
    'pub.section.patents':      'Patents',

    // Projects Page
    'proj.page.title':          'GitHub Projects',
    'proj.page.subtitle':       'Selected research projects in AI, Computational Physics, Network Science, and Machine Learning',
    'proj.github.link':         'Visit GitHub Profile',

    // Education Page
    'edu.page.title':     'Education',
    'edu.page.subtitle':  'My academic journey across three continents',
    'edu.current':        'Current',
    'edu.honours':        'Honours',
    'edu.phd.degree':     'Doctor of Philosophy',
    'edu.phd.field':      'LLMs & Computational Fluid Dynamics',
    'edu.phd.inst':       'Shanghai Jiao Tong University',
    'edu.phd.loc':        'Shanghai, China',
    'edu.phd.years':      '2025 - 2029',
    'edu.phd.desc':       'Research focus on CFD, DEM, Simulations, LLMs, Physics Informed Machine Learning, and Computational Chemistry.',
    'edu.msc.degree':     'Master of Science',
    'edu.msc.field':      'Data Science and Analytics',
    'edu.msc.inst':       'University College Cork',
    'edu.msc.loc':        'Cork, Ireland',
    'edu.msc.years':      '2023 - 2024',
    'edu.msc.desc':       'Thesis: "Genchron Network Analytics tool for Medieval Literature Studies" (Honours). Modules included Deep Learning, Machine Learning, Statistical Modelling, Python for Data Science.',
    'edu.btech.degree':   'Bachelor of Technology',
    'edu.btech.field':    'Computer Science & Engineering',
    'edu.btech.inst':     'Techno India University',
    'edu.btech.loc':      'Kolkata, India',
    'edu.btech.years':    '2018 - 2022',
    'edu.btech.desc':     'Thesis: "Scoring SM Posts using Behavioural Inputs using Social Networks". Grade: 8.27/10',

    // Experience Page
    'exp.page.title':         'Experience',
    'exp.page.subtitle':      'My professional journey across research, industry, and academia',
    'exp.section.current':    'Current Positions',
    'exp.section.industry':   'Industry Experience',
    'exp.section.academic':   'Academic Experience',

    // Blog Page
    'blog.page.title':    'Blog',
    'blog.page.subtitle': 'Research insights, anecdotes, and reflections on my academic journey',

    // Footer
    'footer.name':        'Somyajit Chakraborty (Sam), PhD.',
    'footer.affiliation': 'Doctoral Scholar @ Shanghai Jiao Tong University',
    'footer.role':        'AI Researcher | LLMs | Computational Physics',
    'footer.connect':     'Connect',
    'footer.contact':     'Contact',
    'footer.copyright':   '\u00a9 {year} Somyajit Chakraborty (Sam Chakraborty). All rights reserved.',
  },

  zh: {
    // Nav
    'nav.logo':            '叶一明（Somyajit）博士',
    'nav.home':            '主页',
    'nav.publications':    '论文',
    'nav.projects':        '项目',
    'nav.education':       '教育',
    'nav.experience':      '经历',
    'nav.blog':            '博客',

    // Hero
    'hero.badge':          '上海交通大学 · CGS博士研究员',
    'hero.role':           '物理AI研究员 · 大语言模型、计算流体力学与复杂网络',
    'hero.tag1':           'AI赋能科学',
    'hero.tag2':           '大语言模型与AI智能体',
    'hero.tag3':           '计算物理',
    'hero.tag4':           '复杂网络',
    'hero.pos1':           '博士研究生，化学工程系 — 上海交通大学',
    'hero.pos2':           '研究助理（生成式AI）— 爱尔兰科克大学',
    'hero.pos3':           '访问讲师 — 印度工业大学',
    'hero.cta.pubs':       '查看论文',
    'hero.cta.projects':   '探索项目',

    // Home — Welcome
    'section.welcome':     '欢迎',
    'welcome.p1':          '我是<strong>上海交通大学（SJTU）</strong>化学化工学院的博士研究生，在<strong>陈锡忠教授</strong>的指导下，从事<strong>AI科学仿真、物理AI与计算建模</strong>研究。我的长期研究目标是通过机器学习，开发能够加速复杂物理和工业系统中科学仿真、代理建模、设计优化与科学发现的智能系统。',
    'welcome.p2':          '在攻读博士之前，我在<strong>Rosane Minghim教授</strong>的指导下完成了<strong>爱尔兰科克大学的硕士学业</strong>，她是视觉分析、数据可视化与科学数据分析领域颇具声望的研究者。我还持有<strong>印度工业大学计算机科学与工程学士学位</strong>。我的学术与研究历程涵盖AI、科学机器学习、计算物理、生成建模、复杂网络与数据驱动发现等领域。',
    'welcome.p3':          '我目前的研究兴趣包括：',
    'welcome.interest1':   '<strong>（1）核心AI与基础模型：</strong>开发先进机器学习模型，包括Transformer、生成式AI、科学基础模型及智能体AI系统，用于科学领域的推理、仿真与决策支持。',
    'welcome.interest2':   '<strong>（2）面向物理科学与工程的AI：</strong>构建物理驱动与数据驱动的AI系统，用于CFD、PDE代理建模、多尺度科学仿真、流程优化与科学计算，推动更可靠、高效的仿真辅助工程。',
    'welcome.interest3':   '<strong>（3）面向科学发现与能源的AI：</strong>设计支持逆向设计、科学假设生成、可解释建模及混合仿真学习工作流的AI方法，覆盖化学、流体系统、能源系统与工业过程。',
    'welcome.interest4':   '<strong>（4）面向药物研究的AI：</strong>探索AI驱动的自动化、微纳机器人在手术与医疗任务中的应用，以及利用物理AI进行药物与胶囊设计、DEM-FEM耦合、药物制造及医疗与给药系统的数字孪生。',
    'welcome.p4':          '我更广泛的目标是推动下一代<strong>物理与认知AI</strong>的发展——AI不仅能预测结果，还能帮助科学家和工程师更有效地仿真、理解、控制和发现复杂的现实世界系统，并逐步向具有更强推理、自主性和科学认知能力的系统迈进。',
    'welcome.p5':          '我欢迎来自欧洲大陆、中国、新加坡和美国的研究与技术合作。如果您从事AI for Science、物理、科学发现或面向现实系统的先进机器学习研究，欢迎与我联系。',

    // Home — Research Interests
    'section.interests':        '研究兴趣',
    'interest.llm.title':       'AI智能体与大语言模型',
    'interest.llm.desc':        '大语言模型、RAG、多智能体系统',
    'interest.physics.title':   '计算物理',
    'interest.physics.desc':    '计算流体力学、PDE求解器、物理驱动机器学习',
    'interest.networks.title':  '复杂网络',
    'interest.networks.desc':   '社会网络、科学计量学、认知网络',
    'interest.ai4sci.title':    'AI赋能科学',
    'interest.ai4sci.desc':     '科学计算、仿真、材料设计',

    // Home — Explore
    'section.explore':          '探索',
    'explore.pubs.title':       '论文',
    'explore.pubs.desc':        '期刊、会议、预印本与专利',
    'explore.projects.title':   '项目',
    'explore.projects.desc':    'GitHub 仓库与代码',
    'explore.blog.title':       '博客',
    'explore.blog.desc':        '研究与轶事',

    // Home — Reviewer & Favorites
    'section.reviewer':         '审稿经历',
    'section.favorites':        '我的最爱',
    'fav.future.cat':           '未来：',
    'fav.video.cat':            '视频：',
    'fav.scifi.cat':            '科幻剧：',
    'fav.novel.cat':            '科幻小说：',

    // Publications Page
    'pub.page.title':           '论文',
    'pub.page.subtitle':        '涵盖AI、网络科学、医疗与计算物理的研究成果',
    'pub.scholar.link':         '在 Google Scholar 上查看',
    'pub.kpi.journals':         '期刊',
    'pub.kpi.conferences':      '会议',
    'pub.kpi.review':           '审稿中',
    'pub.kpi.preprints':        '预印本',
    'pub.kpi.patents':          '专利',
    'pub.kpi.total':            '合计',
    'pub.section.selected':     '代表性论文',
    'pub.section.journals':     '期刊论文',
    'pub.section.review':       '审稿中',
    'pub.section.conferences':  '会议论文',
    'pub.section.preprints':    '预印本',
    'pub.section.patents':      '专利',

    // Projects Page
    'proj.page.title':          'GitHub 项目',
    'proj.page.subtitle':       '涵盖AI、计算物理、网络科学与机器学习的精选研究项目',
    'proj.github.link':         '访问 GitHub 主页',

    // Education Page
    'edu.page.title':     '教育经历',
    'edu.page.subtitle':  '横跨三大洲的学术历程',
    'edu.current':        '在读',
    'edu.honours':        '优秀',
    'edu.phd.degree':     '哲学博士',
    'edu.phd.field':      '大语言模型与计算流体力学',
    'edu.phd.inst':       '上海交通大学',
    'edu.phd.loc':        '中国上海',
    'edu.phd.years':      '2025 - 2029',
    'edu.phd.desc':       '研究方向：CFD、DEM、仿真、大语言模型、物理驱动机器学习与计算化学。',
    'edu.msc.degree':     '理学硕士',
    'edu.msc.field':      '数据科学与分析',
    'edu.msc.inst':       '爱尔兰科克大学',
    'edu.msc.loc':        '爱尔兰科克',
    'edu.msc.years':      '2023 - 2024',
    'edu.msc.desc':       '论文："中世纪文学研究的Genchron网络分析工具"（优秀）。课程包括深度学习、机器学习、统计建模、Python数据科学。',
    'edu.btech.degree':   '工学学士',
    'edu.btech.field':    '计算机科学与工程',
    'edu.btech.inst':     '印度工业大学',
    'edu.btech.loc':      '印度加尔各答',
    'edu.btech.years':    '2018 - 2022',
    'edu.btech.desc':     '论文："基于社会网络行为输入的社交媒体帖子评分"。成绩：8.27/10',

    // Experience Page
    'exp.page.title':         '工作经历',
    'exp.page.subtitle':      '横跨研究、工业与学术界的职业历程',
    'exp.section.current':    '当前职位',
    'exp.section.industry':   '工业经历',
    'exp.section.academic':   '学术经历',

    // Blog Page
    'blog.page.title':    '博客',
    'blog.page.subtitle': '研究洞察、轶事与学术旅程的感悟',

    // Footer
    'footer.name':        '叶一明（Somyajit Chakraborty）博士',
    'footer.affiliation': '上海交通大学博士研究生',
    'footer.role':        'AI研究员 | 大语言模型 | 计算物理',
    'footer.connect':     '社交媒体',
    'footer.contact':     '联络',
    'footer.copyright':   '\u00a9 {year} Somyajit Chakraborty（叶一明）。保留所有权利。',
  },
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

let currentLang = 'en';

function initLang() {
  const saved = localStorage.getItem('lang');
  currentLang = (saved === 'zh') ? 'zh' : 'en';
  applyLang(currentLang);
}

function toggleLang() {
  currentLang = (currentLang === 'en') ? 'zh' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLang(currentLang);
}

function t(key) {
  const dict = translations[currentLang] || translations.en;
  return (key in dict) ? dict[key] : (translations.en[key] || key);
}

function applyLang(lang) {
  // Update <html lang> attribute (drives CSS selectors)
  document.documentElement.setAttribute('lang', lang);

  // Update every element carrying a data-i18n key (text content)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  // Update elements carrying a data-i18n-html key (innerHTML — safe, author-controlled)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // Update footer copyright (contains dynamic year)
  const copyrightEl = document.getElementById('footer-copyright');
  if (copyrightEl) {
    copyrightEl.innerHTML = t('footer.copyright').replace('{year}', new Date().getFullYear());
  }

  // Update lang-toggle button label
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.textContent = (lang === 'en') ? '中文' : 'EN';
    langBtn.setAttribute('aria-label', (lang === 'en') ? 'Switch to Chinese' : 'Switch to English');
  }
}
