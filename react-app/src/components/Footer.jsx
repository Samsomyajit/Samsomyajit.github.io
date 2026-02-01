import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const socialLinks = [
  { 
    href: 'https://github.com/Samsomyajit', 
    icon: Github, 
    label: 'GitHub' 
  },
  { 
    href: 'https://www.linkedin.com/in/somyajit-sam-chakraborty/', 
    icon: Linkedin, 
    label: 'LinkedIn' 
  },
  { 
    href: 'https://scholar.google.com/citations?user=R9Wr3yQAAAAJ&hl=en&oi=ao', 
    icon: BookOpen, 
    label: 'Google Scholar' 
  },
  { 
    href: 'mailto:somyajitchppr@gmail.com', 
    icon: Mail, 
    label: 'Email' 
  },
];

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/shield.png" 
        alt="Personal seal" 
        className="footer-shield"
        title="Personal shield"
      />
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sam Chakraborty, MSc.</h3>
            <p>Doctoral Scholar @ Shanghai Jiao Tong University</p>
            <p>AI Researcher | LLMs | Computational Physics</p>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>somyajitchppr@gmail.com</p>
            <p>+353 899418668</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sam Chakraborty. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
