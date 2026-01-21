import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { FadeIn, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

const education = [
  {
    id: 1,
    degree: 'Doctor of Philosophy',
    field: 'LLMs & Computational Fluid Dynamics',
    institution: 'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period: '2025 - 2029',
    description: 'Research focus on CFD, DEM, Simulations, LLMs, Physics Informed Machine Learning, and Computational Chemistry.',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/SJTU_emblem.svg/200px-SJTU_emblem.svg.png',
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
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/University_College_Cork_coat_of_arms.svg/200px-University_College_Cork_coat_of_arms.svg.png',
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
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Techno_India_University_Logo.png',
  },
];

export default function Education() {
  return (
    <div className="page education-page">
      {/* Hero Section */}
      <section className="page-hero">
        <FadeIn>
          <h1 className="page-title">
            <GraduationCap className="title-icon" />
            Education
          </h1>
          <p className="page-subtitle">
            My academic journey across three continents
          </p>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline">
          <StaggerContainer staggerDelay={0.2}>
            {education.map((edu, index) => (
              <StaggerItem key={edu.id}>
                <motion.div 
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-marker">
                    <GraduationCap size={20} />
                  </div>
                  <AnimatedCard className="education-card">
                    {edu.current && <span className="current-badge">Current</span>}
                    {edu.honors && <span className="honors-badge"><Award size={14} /> Honours</span>}
                    
                    <div className="edu-header">
                      <img src={edu.logo} alt={edu.institution} className="edu-logo" />
                      <div>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <p className="edu-field">{edu.field}</p>
                      </div>
                    </div>
                    
                    <p className="edu-institution">{edu.institution}</p>
                    
                    <div className="edu-meta">
                      <span>
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                      <span>
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="edu-description">{edu.description}</p>
                  </AnimatedCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
