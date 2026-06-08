import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { type BlogDataType } from '../components/UI/BlogCard/BlogCard';
import { BlogDatasSample } from './Blog';
import { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './Blog.css';

export default function BlogContent() {
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = useState<BlogDataType | null>(null);

  useEffect(() => {
    const found = BlogDatasSample.find((b) => b.id === id);
    if (found) {
      setCurrentBlog(found);
    }
  }, [id]);

  if (!currentBlog) {
    return (
      <>
        <Header />
        <div className="blog-page">
          <div className="blog-reader-container">
            <Link to="/blog" className="blog-back-btn">
              <FiArrowLeft /> Back to Blog
            </Link>
            <p>Article not found.</p>
          </div>
        </div>
      </>
    );
  }

  // Render content paragraphs split by newlines
  const paragraphs = (currentBlog.fullContent || currentBlog.content).split('\n\n');

  return (
    <>
      <Header />
      <main className="blog-page">
        <div className="blog-reader-container">
          <Link to="/blog" className="blog-back-btn">
            <FiArrowLeft /> Back to Blog
          </Link>

          <article className="blog-article">
            <div className="blog-article-meta">
              {currentBlog.tag && <span className="blog-article-tag">{currentBlog.tag}</span>}
              {currentBlog.tag && <span>•</span>}
              <span>{currentBlog.date || 'Jan 1, 2026'}</span>
              <span>•</span>
              <span>{currentBlog.readTime || '5 min read'}</span>
            </div>

            <h1 className="blog-article-title">{currentBlog.title}</h1>

            <div className="blog-article-body">
              {paragraphs.map((p, index) => (
                <p key={index} className="blog-article-p">{p}</p>
              ))}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
