import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { 
  Heart, 
  MessageCircle, 
  Calendar, 
  ArrowLeft, 
  Send,
  Tag,
  User
} from 'lucide-react';
import { blogs, getBlogInteractions, saveBlogInteractions } from '../data/blogs';
import { FadeIn, AnimatedCard, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';

function BlogCard({ blog, interactions, onLike }) {
  const likes = interactions[blog.id]?.likes || 0;
  const comments = interactions[blog.id]?.comments || [];

  return (
    <AnimatedCard className="blog-card">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} loading="lazy" />
        <span className="blog-category">{blog.category}</span>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">
            <Calendar size={14} />
            {new Date(blog.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-excerpt">{blog.excerpt}</p>
        
        <div className="blog-footer">
          <div className="blog-stats">
            <motion.button
              className="stat-btn"
              onClick={(e) => {
                e.preventDefault();
                onLike(blog.id);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart size={18} fill={likes > 0 ? 'currentColor' : 'none'} />
              {likes}
            </motion.button>
            <span className="stat-btn">
              <MessageCircle size={18} />
              {comments.length}
            </span>
          </div>
          <Link to={`/blog/${blog.id}`} className="read-more">
            Read More →
          </Link>
        </div>
      </div>
    </AnimatedCard>
  );
}

function BlogPost({ blog }) {
  const [interactions, setInteractions] = useState(getBlogInteractions());
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  const blogData = interactions[blog.id] || { likes: 0, comments: [] };

  useEffect(() => {
    // Fetch markdown content if contentUrl is provided
    if (blog.contentUrl) {
      fetch(blog.contentUrl)
        .then(res => res.text())
        .then(text => {
          // Remove YAML frontmatter if present (handles with or without trailing newline)
          const content = text.replace(/^---[\s\S]*?---\s*\n?/, '');
          setMarkdown(content);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading markdown:', err);
          setMarkdown('Error loading content.');
          setLoading(false);
        });
    } else {
      // Fall back to inline content
      setMarkdown(blog.content || '');
      setLoading(false);
    }
  }, [blog.contentUrl, blog.content]);

  const handleLike = () => {
    const updated = {
      ...interactions,
      [blog.id]: {
        ...blogData,
        likes: blogData.likes + 1,
      },
    };
    setInteractions(updated);
    saveBlogInteractions(updated);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    const comment = {
      id: Date.now(),
      author: authorName,
      text: newComment,
      date: new Date().toISOString(),
    };

    const updated = {
      ...interactions,
      [blog.id]: {
        ...blogData,
        comments: [...blogData.comments, comment],
      },
    };
    setInteractions(updated);
    saveBlogInteractions(updated);
    setNewComment('');
  };

  return (
    <div className="blog-post">
      <FadeIn>
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="post-hero">
          <img src={blog.image} alt={blog.title} />
          <div className="post-hero-overlay" />
          <div className="post-hero-content">
            <span className="blog-category">{blog.category}</span>
            <h1>{blog.title}</h1>
            <div className="post-meta">
              <span>
                <Calendar size={16} />
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="post-content">
          {loading ? (
            <p>Loading...</p>
          ) : blog.contentUrl ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
            >
              {markdown}
            </ReactMarkdown>
          ) : (
            markdown.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph}</p>
            ))
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="post-interactions">
          <div className="interaction-buttons">
            <motion.button
              className="like-btn"
              onClick={handleLike}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} fill={blogData.likes > 0 ? 'currentColor' : 'none'} />
              {blogData.likes} {blogData.likes === 1 ? 'Like' : 'Likes'}
            </motion.button>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="comments-section">
          <h3>
            <MessageCircle size={24} />
            Comments ({blogData.comments.length})
          </h3>

          <form onSubmit={handleComment} className="comment-form">
            <input
              type="text"
              placeholder="Your name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={3}
              required
            />
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Post Comment
            </motion.button>
          </form>

          <div className="comments-list">
            <AnimatePresence>
              {blogData.comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  className="comment"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="comment-header">
                    <span className="comment-author">
                      <User size={14} />
                      {comment.author}
                    </span>
                    <span className="comment-date">
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default function Blog() {
  const { id } = useParams();
  const [interactions, setInteractions] = useState(getBlogInteractions());
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(blogs.map(b => b.category))];

  const filteredBlogs = filter === 'all' 
    ? blogs 
    : blogs.filter(b => b.category === filter);

  const handleLike = (blogId) => {
    const blogData = interactions[blogId] || { likes: 0, comments: [] };
    const updated = {
      ...interactions,
      [blogId]: {
        ...blogData,
        likes: blogData.likes + 1,
      },
    };
    setInteractions(updated);
    saveBlogInteractions(updated);
  };

  // If we have a blog ID, show the single post
  if (id) {
    const blog = blogs.find(b => b.id === id);
    if (!blog) {
      return (
        <div className="page blog-page">
          <div className="not-found">
            <h1>Blog Post Not Found</h1>
            <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
          </div>
        </div>
      );
    }
    return (
      <div className="page blog-page">
        <BlogPost blog={blog} />
      </div>
    );
  }

  return (
    <div className="page blog-page">
      {/* Hero Section */}
      <section className="page-hero">
        <FadeIn>
          <h1 className="page-title">
            <MessageCircle className="title-icon" />
            Blog
          </h1>
          <p className="page-subtitle">
            Research insights, anecdotes, and reflections on my academic journey
          </p>
        </FadeIn>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <FadeIn>
          <div className="category-filters">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tag size={14} />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Blog Grid */}
      <section className="blog-section">
        <StaggerContainer staggerDelay={0.1}>
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <StaggerItem key={blog.id}>
                <BlogCard 
                  blog={blog} 
                  interactions={interactions}
                  onLike={handleLike}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </div>
  );
}
