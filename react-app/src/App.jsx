import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Education from './pages/Education';
import Experience from './pages/Experience';
import MyRealm from './pages/MyRealm';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/my-realm" element={<MyRealm />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
