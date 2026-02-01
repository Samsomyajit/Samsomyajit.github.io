import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Upload, 
  FileText, 
  Image as ImageIcon,
  Scroll,
  Wand2,
  LogOut,
  User,
  Lock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { FadeIn, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = onLogin(username, password);
    if (!result.success) {
      setError(result.error);
    }
  };

  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="login-card">
        <Shield size={48} className="login-icon" />
        <h2>Enter the Realm</h2>
        <p className="login-subtitle">Authenticate to access your fantasy sanctuary</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <User size={20} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <Lock size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <motion.button
            type="submit"
            className="btn btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enter
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

function UploadSection({ onUpload }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('starwars');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload({ title, category, content, file });
    setTitle('');
    setContent('');
    setFile(null);
  };

  return (
    <AnimatedCard className="upload-section">
      <h3>
        <Upload size={24} />
        Upload New Content
      </h3>
      
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="starwars">Star Wars Fan Fiction</option>
          <option value="dnd">D&D Scripts</option>
          <option value="artwork">Fantasy Artwork</option>
        </select>
        
        <textarea
          placeholder="Content or description..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
        />
        
        <div className="file-input">
          <input
            type="file"
            accept="image/*,.pdf,.txt,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        
        <motion.button
          type="submit"
          className="btn btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Upload
        </motion.button>
      </form>
    </AnimatedCard>
  );
}

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
      <p className="realm-content">{item.content}</p>
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
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    // Load content from localStorage
    const stored = localStorage.getItem('realm_contents');
    if (stored) {
      setContents(JSON.parse(stored));
    }
  }, []);

  const handleUpload = (newContent) => {
    const content = {
      ...newContent,
      id: Date.now(),
      date: new Date().toISOString()
    };
    const updated = [content, ...contents];
    setContents(updated);
    localStorage.setItem('realm_contents', JSON.stringify(updated));
  };

  if (isLoading) {
    return (
      <div className="page realm-page">
        <div className="loading-state">
          <Shield size={48} className="spinner" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="page realm-page">
        <LoginForm onLogin={login} />
      </div>
    );
  }

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
          <motion.button
            className="btn btn-secondary logout-btn"
            onClick={logout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut size={18} />
            Logout
          </motion.button>
        </FadeIn>
      </section>

      {/* Upload Section */}
      <section className="realm-upload">
        <FadeIn delay={0.1}>
          <UploadSection onUpload={handleUpload} />
        </FadeIn>
      </section>

      {/* Content Grid */}
      <section className="realm-content">
        <FadeIn delay={0.2}>
          <h2 className="section-title">Your Creative Works</h2>
        </FadeIn>
        
        <StaggerContainer staggerDelay={0.1}>
          <div className="realm-grid">
            {contents.length === 0 ? (
              <div className="empty-state">
                <Scroll size={48} />
                <p>No content yet. Start by uploading your first creation!</p>
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
