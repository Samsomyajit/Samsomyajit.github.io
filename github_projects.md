---
layout: default
title: "GitHub Projects"
---

<style>
  /* Modern styling for GitHub Projects page */
  .projects-hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 3rem 2rem;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 3rem;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }

  .projects-hero h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }

  .projects-hero p {
    font-size: 1.2rem;
    margin-top: 1rem;
    opacity: 0.95;
  }

  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .stat-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #667eea;
    margin: 0;
  }

  .stat-label {
    font-size: 1rem;
    color: #555;
    margin-top: 0.5rem;
    font-weight: 500;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 2.5rem 0 1.5rem 0;
    color: #2c3e50;
    position: relative;
    padding-bottom: 0.5rem;
  }

  .section-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .project-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid #667eea;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), transparent);
    border-radius: 0 0 0 100%;
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  .project-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .project-icon {
    font-size: 2rem;
    margin-right: 0.8rem;
  }

  .project-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
  }

  .project-description {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tag {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #667eea;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .project-link:hover {
    background: #764ba2;
    color: white;
  }

  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(245, 87, 108, 0.4);
  }

  .category-section {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    .projects-hero h1 {
      font-size: 1.8rem;
    }
    
    .projects-hero p {
      font-size: 1rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Hero Section -->
<div class="projects-hero">
  <h1>🚀 GitHub Projects & Repositories</h1>
  <p>Explore my work in AI, Machine Learning, Computational Physics, and Web Development</p>
</div>

<!-- GitHub Stats -->
<div class="stats-container">
  <div class="stat-card">
    <p class="stat-number">25+</p>
    <p class="stat-label">Public Repositories</p>
  </div>
  <div class="stat-card">
    <p class="stat-number">500+</p>
    <p class="stat-label">Commits</p>
  </div>
  <div class="stat-card">
    <p class="stat-number">10+</p>
    <p class="stat-label">Languages</p>
  </div>
  <div class="stat-card">
    <p class="stat-number">50+</p>
    <p class="stat-label">Stars Earned</p>
  </div>
</div>

<!-- Featured Projects -->
<div class="category-section">
  <h2 class="section-title">⭐ Featured Projects</h2>
  
  <div class="projects-grid">
    <!-- Project 1: Physics-Informed Neural Networks -->
    <div class="project-card">
      <span class="featured-badge">⭐ Featured</span>
      <div class="project-header">
        <span class="project-icon">🧠</span>
        <h3 class="project-title">PIBERT</h3>
      </div>
      <p class="project-description">
        Physics-Informed Bi-directional Hybrid Spectral Transformer for multiscale CFD surrogate modeling. Combines physics-informed learning with transformer architecture for solving PDEs.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">PyTorch</span>
        <span class="tag">CFD</span>
        <span class="tag">Deep Learning</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/pibert" class="project-link" target="_blank">View Code →</a>
        <a href="https://samsomyajit.github.io/pibert/" class="project-link" target="_blank">View Demo →</a>
      </div>
    </div>

    <!-- Project 2: LLM Research -->
    <div class="project-card">
      <span class="featured-badge">⭐ Featured</span>
      <div class="project-header">
        <span class="project-icon">💬</span>
        <h3 class="project-title">LLM Research Tools</h3>
      </div>
      <p class="project-description">
        Collection of tools and models for Large Language Model research, including petition ranking, text analysis, and NLP applications for social sciences.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Transformers</span>
        <span class="tag">NLP</span>
        <span class="tag">LLMs</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit" class="project-link" target="_blank">View Repositories →</a>
      </div>
    </div>

    <!-- Project 3: Network Science -->
    <div class="project-card">
      <span class="featured-badge">⭐ Featured</span>
      <div class="project-header">
        <span class="project-icon">🕸️</span>
        <h3 class="project-title">SciCoNet</h3>
      </div>
      <p class="project-description">
        Scientific Collaboration Network analysis framework studying multi-dimensional social capital influence on research networks and early-career researcher dynamics.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">NetworkX</span>
        <span class="tag">Data Science</span>
        <span class="tag">Visualization</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/ECR-Research" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>

    <!-- Project 4: WindPulse -->
    <div class="project-card">
      <span class="featured-badge">⭐ Featured</span>
      <div class="project-header">
        <span class="project-icon">🌬️</span>
        <h3 class="project-title">WindPulse</h3>
      </div>
      <p class="project-description">
        Machine learning models for wind energy forecasting in India. Comparative analysis of ML models and Weibull statistics using long-term data for sustainable energy prediction.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Scikit-learn</span>
        <span class="tag">Time Series</span>
        <span class="tag">Energy</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/windpulse" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>
</div>

<!-- AI & Machine Learning Projects -->
<div class="category-section">
  <h2 class="section-title">🤖 AI & Machine Learning</h2>
  
  <div class="projects-grid">
    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">🔄</span>
        <h3 class="project-title">BioGraphVAE</h3>
      </div>
      <p class="project-description">
        Bio-inspired Variational Autoencoder for structured data reconstruction. Combines graph neural networks with VAE architecture for learning complex biological data representations.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">PyTorch</span>
        <span class="tag">VAE</span>
        <span class="tag">Graphs</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/BioGraphVAE" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">⚙️</span>
        <h3 class="project-title">ML Materials Design</h3>
      </div>
      <p class="project-description">
        Machine learning assisted inverse design of low resistivity oxide sputtering targets. Applications in materials science and semiconductor manufacturing.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">ML</span>
        <span class="tag">Materials Science</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/Physics_guided_sputterML" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>
</div>

<!-- Healthcare & Network Science -->
<div class="category-section">
  <h2 class="section-title">🏥 Healthcare & Complex Networks</h2>
  
  <div class="projects-grid">
    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">🏥</span>
        <h3 class="project-title">Trust@Health</h3>
      </div>
      <p class="project-description">
        Trust-based multilayered network for scalable healthcare service management. Implements intelligent doctor recommendation system using network analysis and machine learning.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Networks</span>
        <span class="tag">Healthcare</span>
        <span class="tag">Recommendation</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/Trust_Health" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">📊</span>
        <h3 class="project-title">MedicaNet</h3>
      </div>
      <p class="project-description">
        Trust-based recommender system to recommend doctors based on symptoms. Uses collaborative filtering and network analysis for healthcare recommendations.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Networks</span>
        <span class="tag">Healthcare</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">📈</span>
        <h3 class="project-title">Researcher Network Analysis</h3>
      </div>
      <p class="project-description">
        Analysis of co-authorship networks of early career stage researchers. Studies dropout patterns, comeback dynamics, and growth strategies in academic collaboration networks.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">NetworkX</span>
        <span class="tag">Scientometrics</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/ECR-Research" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>
</div>

<!-- Computational Tools & Utilities -->
<div class="category-section">
  <h2 class="section-title">🔧 Tools & Utilities</h2>
  
  <div class="projects-grid">
    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">📝</span>
        <h3 class="project-title">Research Notebooks</h3>
      </div>
      <p class="project-description">
        Collection of Jupyter notebooks for research experiments, data analysis, and visualization. Includes tutorials on Physics-Informed Neural Networks, CFD, and ML techniques.
      </p>
      <div class="project-tags">
        <span class="tag">Jupyter</span>
        <span class="tag">Python</span>
        <span class="tag">Research</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit" class="project-link" target="_blank">View Repositories →</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">📚</span>
        <h3 class="project-title">Academic Website</h3>
      </div>
      <p class="project-description">
        This personal academic website is built with Jekyll and GitHub Pages. Showcases publications, projects, teaching experience, and research interests.
      </p>
      <div class="project-tags">
        <span class="tag">Jekyll</span>
        <span class="tag">HTML/CSS</span>
        <span class="tag">Markdown</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/Samsomyajit.github.io" class="project-link" target="_blank">View Code →</a>
        <a href="https://samsomyajit.github.io/" class="project-link" target="_blank">View Website →</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">🛠️</span>
        <h3 class="project-title">Data Analysis Scripts</h3>
      </div>
      <p class="project-description">
        Collection of Python scripts for data preprocessing, statistical analysis, and visualization. Useful utilities for scientific computing and data science workflows.
      </p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">Pandas</span>
        <span class="tag">NumPy</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit" class="project-link" target="_blank">View Repositories →</a>
      </div>
    </div>
  </div>
</div>

<!-- Web Applications Section -->
<div class="category-section">
  <h2 class="section-title">🌐 Web Applications</h2>
  
  <div class="projects-grid">
    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">📝</span>
        <h3 class="project-title">BreadKrumbs</h3>
      </div>
      <p class="project-description">
        Simple React.js based note-keeping application. Features a clean interface for creating, editing, and managing notes with modern React hooks and CSS grid layout.
      </p>
      <div class="project-tags">
        <span class="tag">React</span>
        <span class="tag">JavaScript</span>
        <span class="tag">CSS Grid</span>
        <span class="tag">Web App</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/BreadKrumbs" class="project-link" target="_blank">View Code →</a>
        <a href="https://samsomyajit.github.io/BreadKrumbs/" class="project-link" target="_blank">Live Demo →</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <span class="project-icon">✅</span>
        <h3 class="project-title">Task Tracker</h3>
      </div>
      <p class="project-description">
        React-based task management application with JSON server integration. Organize and track your daily tasks with an intuitive user interface.
      </p>
      <div class="project-tags">
        <span class="tag">React</span>
        <span class="tag">JSON Server</span>
        <span class="tag">JavaScript</span>
        <span class="tag">Task Management</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/Samsomyajit/Task-Tracker" class="project-link" target="_blank">View Code →</a>
        <a href="https://samsomyajit.github.io/Task-Tracker/" class="project-link" target="_blank">Live Demo →</a>
      </div>
    </div>
  </div>
</div>

<!-- GitHub Profile Link -->
<div style="text-align: center; margin: 3rem 0;">
  <a href="https://github.com/Samsomyajit" 
     style="display: inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; text-decoration: none; border-radius: 30px; font-size: 1.1rem; font-weight: 600; 
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4); transition: transform 0.3s ease, box-shadow 0.3s ease;"
     target="_blank"
     onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(102, 126, 234, 0.5)';"
     onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.4)';">
    🔗 Visit My GitHub Profile
  </a>
</div>

<hr style="margin: 3rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #667eea, transparent);">

[Back to Home](index.md)
