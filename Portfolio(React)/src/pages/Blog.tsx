import Header from '../components/Header';
import BlogCard, { type BlogDataType } from '../components/UI/BlogCard/BlogCard';
import './Blog.css';

export const BlogDatasSample: BlogDataType[] = [
  {
    id: 'first-vlog',
    title: 'Learning to Build Cool Things From Scratch',
    content: 'My journey of typing fast and building cool things with zero shortcuts — how starting with the basics changed everything.',
    date: 'Jan 12, 2025',
    readTime: '4 min read',
    tag: 'Personal',
  },
  {
    id: 'telegram-bot',
    title: 'How Building a Telegram Bot Opened My Mind',
    content: 'While exploring telegram bot development, I got introduced to APIs, webhooks, and a whole new world of programming patterns.',
    date: 'Mar 5, 2025',
    readTime: '6 min read',
    tag: 'Dev',
  },
  {
    id: 'life-lesson',
    title: 'Multitasking Is a Gift, Not a Curse',
    content: 'I tried forcing myself to focus on one thing at a time. Then I realized the chaos was the process — and that was my superpower.',
    date: 'Apr 20, 2025',
    readTime: '5 min read',
    tag: 'Life',
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="blog-page">

        {/* Hero */}
        <section className="blog-hero">
          <div className="blog-hero-inner">
            <p className="section-label">Blog</p>
            <h1 className="blog-hero-title">
              Read. Explore. <span className="gradient-text">Share.</span>
            </h1>
            <p className="blog-hero-desc">
              Interesting topics, findings and experiences from my journey as a developer.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="blog-cards-section">
          <div className="blog-cards-inner">
            <div className="blog-cards-grid">
              {BlogDatasSample.map(blog => (
                <BlogCard key={blog.id} BlogData={blog} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
