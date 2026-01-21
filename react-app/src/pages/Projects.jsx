import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code, Loader2 } from 'lucide-react';
import { useGitHub } from '../hooks/useGitHub';
import { FadeIn, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

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

function ProjectCard({ repo }) {
  return (
    <AnimatedCard className="project-card">
      <div className="project-image">
        <img 
          src={repo.imageUrl} 
          alt={repo.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://opengraph.githubassets.com/1/Samsomyajit/${repo.name}`;
          }}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{repo.name}</h3>
        <p className="project-description">
          {repo.description || 'No description available'}
        </p>
        
        <div className="project-meta">
          {repo.language && (
            <span className="project-language">
              <span 
                className="language-dot" 
                style={{ backgroundColor: languageColors[repo.language] || languageColors.default }}
              />
              {repo.language}
            </span>
          )}
          <span className="project-stat">
            <Star size={14} />
            {repo.stargazers_count}
          </span>
          <span className="project-stat">
            <GitFork size={14} />
            {repo.forks_count}
          </span>
        </div>

        {repo.topics && repo.topics.length > 0 && (
          <div className="project-topics">
            {repo.topics.slice(0, 4).map((topic) => (
              <span key={topic} className="topic-tag">{topic}</span>
            ))}
          </div>
        )}

        <div className="project-links">
          <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={16} />
            View Code
          </motion.a>
          {repo.homepage && (
            <motion.a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
}

export default function Projects() {
  const { repos, loading, error } = useGitHub('Samsomyajit');

  // Filter out forks and sort by stars
  const filteredRepos = repos
    .filter(repo => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  const totalStars = filteredRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = filteredRepos.reduce((sum, repo) => sum + repo.forks_count, 0);

  return (
    <div className="page projects-page">
      {/* Hero Section */}
      <section className="page-hero">
        <FadeIn>
          <h1 className="page-title">
            <Github className="title-icon" />
            GitHub Projects
          </h1>
          <p className="page-subtitle">
            Explore my work in AI, Machine Learning, Computational Physics, and Web Development
          </p>
        </FadeIn>

        <motion.a
          href="https://github.com/Samsomyajit"
          target="_blank"
          rel="noopener noreferrer"
          className="scholar-link github-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} />
          Visit GitHub Profile
          <ExternalLink size={16} />
        </motion.a>
      </section>

      {/* Stats */}
      {!loading && !error && (
        <section className="pub-stats">
          <FadeIn>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{filteredRepos.length}</span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{totalStars}</span>
                <span className="stat-label">Stars</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{totalForks}</span>
                <span className="stat-label">Forks</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {new Set(filteredRepos.map(r => r.language).filter(Boolean)).size}
                </span>
                <span className="stat-label">Languages</span>
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <Loader2 className="spinner" size={48} />
          <p>Loading projects from GitHub...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-state">
          <p>Failed to load projects: {error}</p>
          <motion.a
            href="https://github.com/Samsomyajit?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
          >
            View on GitHub
          </motion.a>
        </div>
      )}

      {/* Projects Grid */}
      {!loading && !error && (
        <section className="projects-section">
          <StaggerContainer staggerDelay={0.1}>
            <div className="projects-grid">
              {filteredRepos.map((repo) => (
                <StaggerItem key={repo.id}>
                  <ProjectCard repo={repo} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>
      )}
    </div>
  );
}
