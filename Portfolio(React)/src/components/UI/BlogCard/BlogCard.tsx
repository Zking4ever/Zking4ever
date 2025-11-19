import './BlogCard.css'

export default function BlogCard() {
  return (
    <div className="blog-card">
      <div className="blog-image">

      </div>
      <div className="blog-decription">
        <h3>Blog Title</h3>
        <div className="blog-small">
            <span className="blog-date">Date</span>
            <span className="blog-date">Duration</span>
        </div>
      </div>
    </div>
  )
}
