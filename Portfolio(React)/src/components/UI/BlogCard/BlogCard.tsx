import { Link } from 'react-router-dom'
import './BlogCard.css'

export interface BlogDataType {
  id: string;
  title: string;
  content: string;
  date?: string;
  readTime?: string;
  tag?: string;
  fullContent?: string;
}
export interface BlogDataProps {
  BlogData: BlogDataType;
}

export default function BlogCard({ BlogData }: BlogDataProps) {
  return (
    <Link to={`/blog/${BlogData.id}`} className="blog-card-link">
      <div className="blog-card">
        <div className="blog-image">
          {BlogData.tag && <span className="blog-card-badge">{BlogData.tag}</span>}
        </div>
        <div className="blog-decription">
          <h3>{BlogData.title}</h3>
          <p className="blog-summary-text">{BlogData.content}</p>
          <div className="blog-small">
            <span className="blog-date">{BlogData.date || 'Jan 1, 2026'}</span>
            <span className="blog-separator">•</span>
            <span className="blog-duration">{BlogData.readTime || '5 min read'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
