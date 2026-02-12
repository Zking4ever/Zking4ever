import Header from '../components/Header'
import BlogCard, { type BlogDataType } from '../components/UI/BlogCard/BlogCard'

export const BlogDatasSample:BlogDataType[] = [
  { 
    'id':'first-vlog',
    'title': "First Vlog to be posted",
    'content': 'I am learning to type fast and build cool things from scratch',
  },
  {
    'id':'telegram-bot',
    'title':' I should create a telegram bot to make things right',
    'content':"While learning creating telegram bot i got introduced to many programming languages"
  },
  { 
    'id':'life-lesson',
    'title':'Multitasking is a my gift',
    'content': `I've tried to focus on doing one thing at a time thinking it was making me distructed but actually it was a gift for me`
  }
]
  
export default function Blog() {

  const fetchBlogs = ()=>{
      // read blogs and set to a use state the array and then map the blog card
  }

  return (
     <>
        <Header />
        <div className="blog-page">

            <span className='blog-page'>Read Explore Share</span>
            <p>Interesting topics, findings and experiences</p>
            <div className="blog-cards-container">
                {
                  BlogDatasSample.map(blog=>(<BlogCard BlogData={blog} />))
                }
            </div>
        </div>
    </>
  )
}
