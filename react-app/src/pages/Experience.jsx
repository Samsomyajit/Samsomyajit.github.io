import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building, Users, Award } from 'lucide-react';
import { FadeIn, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

const industry = [
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

const academic = [
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

function ExperienceCard({ exp }) {
  return (
    <AnimatedCard className="experience-card">
      <div className="exp-type-badge" data-type={exp.type.toLowerCase()}>
        {exp.type}
      </div>
      
      <h3 className="exp-title">{exp.title}</h3>
      <p className="exp-company">
        <Building size={16} />
        {exp.company}
        {exp.department && <span className="exp-dept"> - {exp.department}</span>}
      </p>
      
      <div className="exp-meta">
        <span>
          <MapPin size={14} />
          {exp.location}
        </span>
        <span>
          <Calendar size={14} />
          {exp.period}
        </span>
      </div>
      
      <ul className="exp-highlights">
        {exp.highlights.map((highlight, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {highlight}
          </motion.li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

export default function Experience() {
  return (
    <div className="page experience-page">
      {/* Hero Section */}
      <section className="page-hero">
        <FadeIn>
          <h1 className="page-title">
            <Briefcase className="title-icon" />
            Experience
          </h1>
          <p className="page-subtitle">
            My professional journey across research, industry, and academia
          </p>
        </FadeIn>
      </section>

      {/* Current Positions */}
      <section className="current-section">
        <FadeIn>
          <h2 className="section-title">
            <Award size={24} />
            Current Positions
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1}>
          <div className="current-grid">
            {currentPositions.map((pos, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="current-card">
                  <h4>{pos.title}</h4>
                  <p className="org">{pos.organization}</p>
                  <p className="dept">{pos.department}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Industry Experience */}
      <section className="exp-section">
        <FadeIn>
          <h2 className="section-title">
            <Building size={24} />
            Industry Experience
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.2}>
          <div className="experience-grid">
            {industry.map((exp) => (
              <StaggerItem key={exp.id}>
                <ExperienceCard exp={exp} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Academic Experience */}
      <section className="exp-section">
        <FadeIn>
          <h2 className="section-title">
            <Users size={24} />
            Academic Experience
          </h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.2}>
          <div className="experience-grid">
            {academic.map((exp) => (
              <StaggerItem key={exp.id}>
                <ExperienceCard exp={exp} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  );
}
