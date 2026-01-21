import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, FileText, Award } from 'lucide-react';
import { publications, scholarUrl } from '../data/publications';
import { FadeIn, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

function PublicationCard({ pub, type }) {
  return (
    <AnimatedCard className="publication-card">
      <div className="pub-type-badge">{type}</div>
      <h3 className="pub-title">{pub.title}</h3>
      <p className="pub-authors">{pub.authors}</p>
      <div className="pub-details">
        {pub.journal && <span className="pub-venue">{pub.journal}</span>}
        {pub.conference && <span className="pub-venue">{pub.conference}</span>}
        {pub.volume && <span className="pub-volume">Vol. {pub.volume}</span>}
        {pub.pages && <span className="pub-pages">pp. {pub.pages}</span>}
        <span className="pub-year">{pub.year}</span>
      </div>
      {pub.status && <span className="pub-status">{pub.status}</span>}
    </AnimatedCard>
  );
}

export default function Publications() {
  const totalPubs = 
    publications.journals.length + 
    publications.conferences.length + 
    publications.preprints.length + 
    publications.underReview.length;

  return (
    <div className="page publications-page">
      {/* Hero Section */}
      <section className="page-hero">
        <FadeIn>
          <h1 className="page-title">
            <BookOpen className="title-icon" />
            Publications
          </h1>
          <p className="page-subtitle">
            My research contributions spanning AI, Network Science, Healthcare, and Computational Physics
          </p>
        </FadeIn>

        <motion.a
          href={scholarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="scholar-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BookOpen size={20} />
          View on Google Scholar
          <ExternalLink size={16} />
        </motion.a>
      </section>

      {/* Stats */}
      <section className="pub-stats">
        <FadeIn>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{publications.journals.length}</span>
              <span className="stat-label">Journals</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{publications.conferences.length}</span>
              <span className="stat-label">Conferences</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{publications.underReview.length}</span>
              <span className="stat-label">Under Review</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{totalPubs}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Journals */}
      <section className="pub-section">
        <FadeIn>
          <h2 className="section-title">
            <FileText size={24} />
            Journal Publications
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1}>
          <div className="publications-grid">
            {publications.journals.map((pub) => (
              <StaggerItem key={pub.id}>
                <PublicationCard pub={pub} type="Journal" />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Under Review */}
      <section className="pub-section">
        <FadeIn>
          <h2 className="section-title">
            <Award size={24} />
            Under Review
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1}>
          <div className="publications-grid">
            {publications.underReview.map((pub) => (
              <StaggerItem key={pub.id}>
                <PublicationCard pub={pub} type="Pending" />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Conferences */}
      <section className="pub-section">
        <FadeIn>
          <h2 className="section-title">
            <FileText size={24} />
            Conference Publications
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1}>
          <div className="publications-grid">
            {publications.conferences.map((pub) => (
              <StaggerItem key={pub.id}>
                <PublicationCard pub={pub} type="Conference" />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Preprints */}
      <section className="pub-section">
        <FadeIn>
          <h2 className="section-title">
            <FileText size={24} />
            Preprints
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1}>
          <div className="publications-grid">
            {publications.preprints.map((pub) => (
              <StaggerItem key={pub.id}>
                <PublicationCard pub={pub} type="Preprint" />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  );
}
