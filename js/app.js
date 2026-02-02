// ============================================
// MAIN APPLICATION SCRIPT
// ============================================

// SVG Icons (Lucide-style)
const icons = {
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  bookOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
  folderGit: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><circle cx="12" cy="13" r="2"></circle><path d="M14 13h3"></path><path d="M7 13h3"></path></svg>',
  graduationCap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>',
  briefcase: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
  messageSquare: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  externalLink: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  fileText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  award: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  gitFork: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>',
  code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  loader: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  messageCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
  arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
  tag: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  building: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  brain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54Z"></path></svg>',
  atom: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>',
  network: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>',
};

// Language colors for GitHub projects
const languageColors = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Java: '#b07219',
  'C++': '#f34b7d',
  Jupyter: '#DA5B0B',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  default: '#6e7681',
};

// State
let currentPage = 'home';
let currentBlogId = null;
let blogInteractions = {};
let mobileMenuOpen = false;
let currentBlogFilter = 'all';

// ============================================
// THEME MANAGEMENT
// ============================================
function initTheme() {
  const saved = localStorage.getItem('theme');
  const isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(!isDark);
}

function updateThemeIcon(isDark) {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = isDark ? icons.sun : icons.moon;
  }
}

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page, blogId = null) {
  currentPage = page;
  currentBlogId = blogId;
  
  // Update active nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show current page
  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) {
    pageEl.classList.add('active');
  }
  
  // Close mobile menu
  closeMobileMenu();
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Handle blog post view
  if (page === 'blog' && blogId) {
    showBlogPost(blogId);
  } else if (page === 'blog') {
    showBlogList();
  }
  
  // Animate cards
  setTimeout(animateCards, 100);
}

function closeMobileMenu() {
  mobileMenuOpen = false;
  const mobileNav = document.querySelector('.nav-links.mobile');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileNav) mobileNav.classList.remove('open');
  if (menuBtn) menuBtn.innerHTML = icons.menu;
}

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const mobileNav = document.querySelector('.nav-links.mobile');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileNav) {
    mobileNav.classList.toggle('open', mobileMenuOpen);
  }
  if (menuBtn) {
    menuBtn.innerHTML = mobileMenuOpen ? icons.x : icons.menu;
  }
}

// ============================================
// ANIMATION
// ============================================
function animateCards() {
  const cards = document.querySelectorAll('.animated-card:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => observer.observe(card));
}

// ============================================
// BLOG INTERACTIONS
// ============================================
function loadBlogInteractions() {
  const stored = localStorage.getItem('blogInteractions');
  blogInteractions = stored ? JSON.parse(stored) : {};
}

function saveBlogInteractions() {
  localStorage.setItem('blogInteractions', JSON.stringify(blogInteractions));
}

function likeBlog(blogId) {
  if (!blogInteractions[blogId]) {
    blogInteractions[blogId] = { likes: 0, comments: [] };
  }
  blogInteractions[blogId].likes++;
  saveBlogInteractions();
  renderBlogPage();
}

function addComment(blogId, author, text) {
  if (!blogInteractions[blogId]) {
    blogInteractions[blogId] = { likes: 0, comments: [] };
  }
  blogInteractions[blogId].comments.push({
    id: Date.now(),
    author,
    text,
    date: new Date().toISOString()
  });
  saveBlogInteractions();
}

// ============================================
// BLOG RENDERING
// ============================================
function showBlogList() {
  const blogPage = document.getElementById('page-blog');
  blogPage.classList.remove('blog-post-view');
}

function showBlogPost(blogId) {
  const blog = blogs.find(b => b.id === blogId);
  if (!blog) return;
  
  const blogPage = document.getElementById('page-blog');
  blogPage.classList.add('blog-post-view');
  
  const postContainer = document.querySelector('.blog-post');
  const blogData = blogInteractions[blogId] || { likes: 0, comments: [] };
  
  postContainer.innerHTML = `
    <div class="back-link" onclick="navigateTo('blog')">
      ${icons.arrowLeft}
      Back to Blog
    </div>
    
    <div class="post-hero">
      <img src="${blog.image}" alt="${blog.title}">
      <div class="post-hero-overlay"></div>
      <div class="post-hero-content">
        <span class="blog-category">${blog.category}</span>
        <h1>${blog.title}</h1>
        <div class="post-meta">
          <span>${icons.calendar} ${formatDate(blog.date)}</span>
        </div>
      </div>
    </div>
    
    <div class="post-content" id="post-content">
      <p>Loading...</p>
    </div>
    
    <div class="post-interactions">
      <div class="interaction-buttons">
        <button class="like-btn" onclick="likeBlogPost('${blogId}')">
          ${icons.heart}
          ${blogData.likes} ${blogData.likes === 1 ? 'Like' : 'Likes'}
        </button>
      </div>
    </div>
    
    <div class="comments-section">
      <h3>${icons.messageCircle} Comments (${blogData.comments.length})</h3>
      
      <form class="comment-form" onsubmit="submitComment(event, '${blogId}')">
        <input type="text" id="comment-author" placeholder="Your name" required>
        <textarea id="comment-text" placeholder="Write a comment..." rows="3" required></textarea>
        <button type="submit" class="btn btn-primary">
          ${icons.send}
          Post Comment
        </button>
      </form>
      
      <div class="comments-list">
        ${blogData.comments.map(c => `
          <div class="comment">
            <div class="comment-header">
              <span class="comment-author">${icons.user} ${c.author}</span>
              <span class="comment-date">${new Date(c.date).toLocaleDateString()}</span>
            </div>
            <p class="comment-text">${c.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Load markdown content
  if (blog.contentUrl) {
    fetch(blog.contentUrl)
      .then(res => res.text())
      .then(text => {
        // Remove YAML frontmatter if present
        const content = text.replace(/^---[\s\S]*?---\n/, '');
        document.getElementById('post-content').innerHTML = parseMarkdown(content);
        
        // Trigger MathJax to render math equations
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise([document.getElementById('post-content')]).catch((err) => {
            console.warn('MathJax typeset error:', err);
          });
        }
      })
      .catch(err => {
        document.getElementById('post-content').innerHTML = '<p>Error loading content.</p>';
      });
  }
}

function likeBlogPost(blogId) {
  likeBlog(blogId);
  showBlogPost(blogId);
}

function submitComment(event, blogId) {
  event.preventDefault();
  const author = document.getElementById('comment-author').value;
  const text = document.getElementById('comment-text').value;
  addComment(blogId, author, text);
  showBlogPost(blogId);
}

function filterBlogs(category) {
  currentBlogFilter = category;
  renderBlogPage();
}

// Simple markdown parser
function parseMarkdown(text) {
  // First, protect LaTeX math from being parsed
  const mathBlocks = [];
  const inlineMath = [];
  
  // Protect display math ($$...$$)
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (match) => {
    mathBlocks.push(match);
    return `%%MATHBLOCK${mathBlocks.length - 1}%%`;
  });
  
  // Protect inline math ($...$) - exclude currency like "$5" by requiring non-digit after first $
  text = text.replace(/\$([^\$\d\n][^\$\n]*?)\$/g, (match) => {
    inlineMath.push(match);
    return `%%INLINEMATH${inlineMath.length - 1}%%`;
  });
  
  // Protect code blocks first
  const codeBlocks = [];
  text = text.replace(/```([\s\S]*?)```/g, (match, code) => {
    codeBlocks.push(code);
    return `%%CODEBLOCK${codeBlocks.length - 1}%%`;
  });
  
  // Remove script tags from markdown content - they're not needed as MathJax is loaded globally
  // Note: Content is author-controlled (from repository markdown files), not user input
  // Use a loop to handle nested or malformed script tags
  let previousText;
  do {
    previousText = text;
    // Match opening script tag, any content, and closing script tag with flexible whitespace
    text = text.replace(/<script\b[\s\S]*?<\/\s*script[\s\S]*?>/gi, '');
  } while (text !== previousText);
  
  text = text
    // Horizontal rules (must be before other replacements)
    .replace(/^---$/gim, '<hr>')
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic - match *text* but not at start of line (to avoid list conflicts) or in URLs
    .replace(/(?<=\s|^>)\*([^\*\n]+?)\*(?=\s|[.,!?;:]|$)/gim, '<em>$1</em>')
    // Images (MUST be before links!)
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" loading="lazy" class="blog-content-image">')
    // Links (but not inside protected content)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // Blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Unordered lists (combine both * and - patterns)
    .replace(/^[\*\-] (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Inline code (after protecting code blocks)
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p>')
    // Line breaks
    .replace(/\n/gim, '<br>');
  
  // Restore code blocks with proper formatting
  codeBlocks.forEach((code, i) => {
    // Remove language identifier from first line if present (supports python, c++, javascript, etc.)
    const lines = code.split('\n');
    const firstLine = lines[0].trim();
    const isLanguage = /^[a-zA-Z0-9#+\-]+$/.test(firstLine) && firstLine.length < 20;
    const codeContent = isLanguage ? lines.slice(1).join('\n') : code;
    text = text.replace(`%%CODEBLOCK${i}%%`, `<pre><code>${escapeHtml(codeContent.trim())}</code></pre>`);
  });
  
  // Restore display math blocks
  mathBlocks.forEach((math, i) => {
    text = text.replace(`%%MATHBLOCK${i}%%`, `<div class="math-display">${math}</div>`);
  });
  
  // Restore inline math
  inlineMath.forEach((math, i) => {
    text = text.replace(`%%INLINEMATH${i}%%`, `<span class="math-inline">${math}</span>`);
  });
  
  return text;
}

// Helper function to escape HTML in code blocks
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================
// GITHUB PROJECTS
// ============================================
async function loadGitHubProjects() {
  const container = document.getElementById('projects-container');
  const statsContainer = document.getElementById('projects-stats');
  
  container.innerHTML = `
    <div class="loading-state">
      <div class="spinner">${icons.loader}</div>
      <p>Loading projects from GitHub...</p>
    </div>
  `;
  
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`);
    if (!response.ok) throw new Error('Failed to fetch');
    
    const repos = await response.json();
    const filteredRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    
    const totalStars = filteredRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = filteredRepos.reduce((sum, repo) => sum + repo.forks_count, 0);
    const languages = new Set(filteredRepos.map(r => r.language).filter(Boolean)).size;
    
    // Render stats
    statsContainer.innerHTML = `
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">${filteredRepos.length}</span>
          <span class="stat-label">Repositories</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${totalStars}</span>
          <span class="stat-label">Stars</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${totalForks}</span>
          <span class="stat-label">Forks</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${languages}</span>
          <span class="stat-label">Languages</span>
        </div>
      </div>
    `;
    
    // Render projects
    container.innerHTML = `
      <div class="projects-grid">
        ${filteredRepos.map(repo => `
          <div class="animated-card project-card">
            <div class="project-image">
              <img src="https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}" 
                   alt="${repo.name}" 
                   loading="lazy">
            </div>
            <div class="project-content">
              <h3 class="project-title">${repo.name}</h3>
              <p class="project-description">${repo.description || 'No description available'}</p>
              
              <div class="project-meta">
                ${repo.language ? `
                  <span class="project-language">
                    <span class="language-dot" style="background-color: ${languageColors[repo.language] || languageColors.default}"></span>
                    ${repo.language}
                  </span>
                ` : ''}
                <span class="project-stat">${icons.star} ${repo.stargazers_count}</span>
                <span class="project-stat">${icons.gitFork} ${repo.forks_count}</span>
              </div>
              
              ${repo.topics && repo.topics.length > 0 ? `
                <div class="project-topics">
                  ${repo.topics.slice(0, 4).map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                </div>
              ` : ''}
              
              <div class="project-links">
                <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link">
                  ${icons.code} View Code
                </a>
                ${repo.homepage ? `
                  <a href="${repo.homepage}" target="_blank" rel="noopener" class="project-link secondary">
                    ${icons.externalLink} Demo
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    setTimeout(animateCards, 100);
  } catch (error) {
    container.innerHTML = `
      <div class="error-state">
        <p>Failed to load projects</p>
        <a href="https://github.com/${githubUsername}?tab=repositories" target="_blank" class="btn btn-primary">
          View on GitHub
        </a>
      </div>
    `;
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderBlogPage() {
  const container = document.getElementById('blog-grid');
  const filtersContainer = document.getElementById('blog-filters');
  
  const categories = ['all', ...new Set(blogs.map(b => b.category))];
  const filteredBlogs = currentBlogFilter === 'all' 
    ? blogs 
    : blogs.filter(b => b.category === currentBlogFilter);
  
  // Render filters
  filtersContainer.innerHTML = categories.map(cat => `
    <button class="filter-btn ${currentBlogFilter === cat ? 'active' : ''}" 
            onclick="filterBlogs('${cat}')">
      ${icons.tag}
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  `).join('');
  
  // Render blog cards
  container.innerHTML = filteredBlogs.map(blog => {
    const data = blogInteractions[blog.id] || { likes: 0, comments: [] };
    return `
      <div class="animated-card blog-card" onclick="navigateTo('blog', '${blog.id}')">
        <div class="blog-image">
          <img src="${blog.image}" alt="${blog.title}" loading="lazy">
          <span class="blog-category">${blog.category}</span>
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">${icons.calendar} ${formatDate(blog.date)}</span>
          </div>
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-excerpt">${blog.excerpt}</p>
          
          <div class="blog-footer">
            <div class="blog-stats">
              <button class="stat-btn" onclick="event.stopPropagation(); likeBlog('${blog.id}')">
                ${icons.heart} ${data.likes}
              </button>
              <span class="stat-btn">${icons.messageCircle} ${data.comments.length}</span>
            </div>
            <span class="read-more">Read More →</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  setTimeout(animateCards, 100);
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
  initTheme();
  loadBlogInteractions();
  
  // Set up theme toggle
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
  
  // Set up mobile menu
  document.querySelector('.mobile-menu-btn').addEventListener('click', toggleMobileMenu);
  
  // Set up navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });
  
  // Set up logo click
  document.querySelector('.nav-logo').addEventListener('click', () => navigateTo('home'));
  
  // Set up quick links
  document.querySelectorAll('.quick-link-card').forEach(card => {
    card.addEventListener('click', () => navigateTo(card.dataset.page));
  });
  
  // Set up hero CTA buttons
  document.querySelectorAll('.hero-cta .btn').forEach(btn => {
    if (btn.dataset.page) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(btn.dataset.page);
      });
    }
  });
  
  // Load initial page
  navigateTo('home');
  
  // Load GitHub projects when projects page is visited
  const observer = new MutationObserver(() => {
    if (currentPage === 'projects') {
      loadGitHubProjects();
      observer.disconnect();
    }
  });
  
  // Render blog page
  renderBlogPage();
  
  // Set up dynamic year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Animate cards on scroll
  animateCards();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
