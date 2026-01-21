import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  BookOpen, 
  Mail,
  MapPin,
  Sparkles,
  Brain,
  Atom,
  Network
} from 'lucide-react';
import { FadeIn, FloatingElement, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

const interests = [
  { icon: Brain, title: 'Generative AI & LLMs', description: 'Large Language Models, RAG, Multi-Agent Systems' },
  { icon: Atom, title: 'Computational Physics', description: 'CFD, PDE Solvers, Physics-Informed ML' },
  { icon: Network, title: 'Complex Networks', description: 'Social Networks, Scientometrics, Graph Analysis' },
  { icon: Sparkles, title: 'AI4Science', description: 'Scientific Computing, Simulations, Materials Design' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/somyajit-sam-chakraborty/', icon: Linkedin, label: 'LinkedIn', color: '#0077b5' },
  { href: 'https://www.researchgate.net/profile/Somyajit-Chakraborty/', icon: BookOpen, label: 'ResearchGate', color: '#00d0af' },
  { href: 'https://scholar.google.com/citations?user=R9Wr3yQAAAAJ&hl=en&oi=ao', icon: BookOpen, label: 'Google Scholar', color: '#4285f4' },
  { href: 'https://github.com/Samsomyajit', icon: Github, label: 'GitHub', color: '#333' },
  { href: 'mailto:somyajitchppr@gmail.com', icon: Mail, label: 'Email', color: '#ea4335' },
];

export default function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>
        
        <div className="hero-content">
          <FadeIn>
            <FloatingElement amplitude={5} duration={4}>
              <motion.img
                src="/Profi.png"
                alt="Sam Chakraborty"
                className="profile-image"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              />
            </FloatingElement>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="hero-title">
              Sam Chakraborty
              <span className="hero-subtitle">MSc.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="hero-role">
              <MapPin size={18} style={{ display: 'inline', marginRight: '8px' }} />
              Doctoral Scholar @ Shanghai Jiao Tong University
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="hero-tags">
              <span className="hero-tag">Generative AI</span>
              <span className="hero-tag">LLMs</span>
              <span className="hero-tag">Computational Physics</span>
              <span className="hero-tag">Complex Networks</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="social-icons">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--hover-color': link.color }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="hero-cta">
              <Link to="/publications" className="btn btn-primary">
                View Publications
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                Explore Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <FadeIn>
          <h2 className="section-title">Welcome</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="welcome-text">
            Welcome to my personal academic website. I am an AI researcher working at Shanghai Jiao Tong University 
            specializing in AI4Science, Computational Fluid Dynamics, PDE solvers, Large Language Models, Network Science, 
            and Agentic Systems. My work spans Language Models, Computational Intelligence, Decision Making, Cognition, 
            Optimization, Game Research, and Physics-Informed ML.
          </p>
          <p className="welcome-text">
            I'm open to research and technical collaborations in Mainland Europe, China, Singapore and the US. 
            If you work on AI in Science, Physics, Social Dynamics, or innovative deep learning/optimization, 
            let's connect and push research boundaries together.
          </p>
        </FadeIn>
      </section>

      {/* Research Interests */}
      <section className="interests-section">
        <FadeIn>
          <h2 className="section-title">Research Interests</h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.15}>
          <div className="interests-grid">
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <StaggerItem key={interest.title}>
                  <AnimatedCard className="interest-card">
                    <div className="interest-icon">
                      <Icon size={32} />
                    </div>
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <FadeIn>
          <h2 className="section-title">Explore</h2>
        </FadeIn>
        <div className="quick-links-grid">
          <FadeIn delay={0.1} direction="left">
            <Link to="/publications" className="quick-link-card">
              <BookOpen size={40} />
              <h3>Publications</h3>
              <p>Journals, Conferences & Preprints</p>
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <Link to="/projects" className="quick-link-card">
              <Github size={40} />
              <h3>Projects</h3>
              <p>GitHub Repositories & Code</p>
            </Link>
          </FadeIn>
          <FadeIn delay={0.3} direction="right">
            <Link to="/blog" className="quick-link-card">
              <Sparkles size={40} />
              <h3>Blog</h3>
              <p>Research & Anecdotes</p>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
