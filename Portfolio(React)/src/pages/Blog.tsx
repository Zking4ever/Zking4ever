import Header from '../components/Header'
import BlogCard from '../components/UI/BlogCard/BlogCard'

export default function Blog() {
  return (
    <>
        <Header />
        <div className="blog-page">

            <span className='blog-page'>Read Explore Share</span>
            <p>Interesting topics, findings and experiences</p>
            <div className="blog-cards-container">
                <BlogCard />
                <BlogCard />
                <BlogCard />

            </div>
        </div>
    </>
  )
}
