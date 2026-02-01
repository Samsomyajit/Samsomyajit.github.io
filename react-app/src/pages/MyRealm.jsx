import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  Image as ImageIcon,
  Scroll,
  Wand2
} from 'lucide-react';
import { FadeIn, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

function ContentItem({ item, index }) {
  const icons = {
    starwars: Scroll,
    dnd: Wand2,
    artwork: ImageIcon
  };
  
  const Icon = icons[item.category] || FileText;
  
  return (
    <AnimatedCard className="realm-item">
      <div className="realm-item-header">
        <Icon size={24} className="realm-icon" />
        <div>
          <h3>{item.title}</h3>
          <span className="realm-category">{item.category.replace('starwars', 'Star Wars').replace('dnd', 'D&D')}</span>
        </div>
      </div>
      <p className="realm-item-content">{item.content}</p>
      {item.file && (
        <div className="realm-file">
          <FileText size={16} />
          <span>{item.file.name}</span>
        </div>
      )}
      <div className="realm-date">
        {new Date(item.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </AnimatedCard>
  );
}

export default function MyRealm() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    // Load content from localStorage
    const stored = localStorage.getItem('realm_contents');
    if (stored) {
      setContents(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="page realm-page">
      {/* Hero Section */}
      <section className="page-hero">
        <FadeIn>
          <h1 className="page-title">
            <Shield className="title-icon" />
            My Realm
          </h1>
          <p className="page-subtitle">
            A sanctuary for fantasy, fan fiction, and creative adventures
          </p>
        </FadeIn>
      </section>

      {/* Content Grid */}
      <section className="realm-content">
        <FadeIn delay={0.2}>
          <h2 className="section-title">Creative Works</h2>
        </FadeIn>
        
        <StaggerContainer staggerDelay={0.1}>
          <div className="realm-grid">
            {contents.length === 0 ? (
              <div className="empty-state">
                <Scroll size={48} />
                <p>No content available yet. Check back soon for fantasy stories, D&D adventures, and artwork!</p>
              </div>
            ) : (
              contents.map((item, index) => (
                <StaggerItem key={item.id}>
                  <ContentItem item={item} index={index} />
                </StaggerItem>
              ))
            )}
          </div>
        </StaggerContainer>
      </section>
    </div>
  );
}
