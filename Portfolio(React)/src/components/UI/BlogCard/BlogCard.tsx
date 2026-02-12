import { Link } from 'react-router-dom'
import './BlogCard.css'

export interface BlogDataType{
  id:string,
  title: string,
  content: string,
  // comment: []
}
export interface BlogDataProps{
  BlogData: BlogDataType
}

export default function BlogCard({BlogData}:BlogDataProps) {
  return (
    <Link to={`/blog/${(BlogData.id)}`}>
    <div className="blog-card">
      <div className="blog-image">

      </div>
      <div className="blog-decription">
        <h3>{BlogData.title}</h3>
        <div className="blog-small">
            <span className="blog-date">Date</span>
            <span className="blog-date">Duration</span>
        </div>
      </div>
    </div>
    </Link>
  )
}
