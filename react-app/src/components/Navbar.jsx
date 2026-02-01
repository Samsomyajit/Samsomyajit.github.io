import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  FolderGit2, 
  GraduationCap, 
  Briefcase, 
  FileText,
  MessageSquare,
  Shield
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/publications', label: 'Publications', icon: BookOpen },
  { path: '/projects', label: 'Projects', icon: FolderGit2 },
  { path: '/education', label: 'Education', icon: GraduationCap },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/blog', label: 'Blog', icon: MessageSquare },
  { path: '/my-realm', label: 'My Realm', icon: Shield },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sam Chakraborty
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link-content"
                >
                  <Icon size={18} />
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="nav-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-links mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
