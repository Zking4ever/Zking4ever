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
    fullContent: 'When I first started writing code, I made the common mistake of rushing to use libraries and copying snippets without truly understanding them. Everything I built felt fragile, like a house of cards. One day, I decided to take a step back and build a simple web project completely from scratch—using only raw HTML, vanilla CSS, and plain JavaScript. No frameworks, no boilerplate templates, no AI shortcuts.\n\nBuilding from scratch forced me to learn how the browser actually works. I had to understand DOM rendering cycles, master CSS positioning, and handle event listeners manually. I typed out every single character, debugged every console error, and designed the application flow myself. Yes, it was much slower. But that stubborn process changed my entire relationship with code. It laid down a rock-solid foundation. Now, when I use advanced frameworks like React, they are no longer mysterious black boxes—I understand what they are doing under the hood. Don\'t skip the basics. Write the raw code first.'
  },
  {
    id: 'telegram-bot',
    title: 'How Building a Telegram Bot Opened My Mind',
    content: 'While exploring telegram bot development, I got introduced to APIs, webhooks, and a whole new world of programming patterns.',
    date: 'Mar 5, 2025',
    readTime: '6 min read',
    tag: 'Dev',
    fullContent: 'My introduction to backend development and network architecture happened when I decided to build a custom Telegram bot. Up to that point, all my coding projects were local console scripts that ran in isolation on my own computer. Building a bot forced me to think about how computers talk to each other across the internet.\n\nI had to configure webhooks, set up a server, parse HTTP request payloads, and interact with external APIs. I still remember the thrill of typing a command in my Telegram chat and seeing my local server capture the JSON payload in real-time. That project opened my mind to backend routing, APIs, and the power of distributed systems. It was the catalyst that led me to study database integration, server hosting, and security protocols. It taught me that coding is not just about local computation; it\'s about connecting systems together.'
  },
  {
    id: 'life-lesson',
    title: 'Multitasking Is a Gift, Not a Curse',
    content: 'I tried forcing myself to focus on one thing at a time. Then I realized the chaos was the process — and that was my superpower.',
    date: 'Apr 20, 2025',
    readTime: '5 min read',
    tag: 'Life',
    fullContent: 'For years, productivity blogs convinced me that the only way to succeed was to focus on one single task until it was 100% finished. I tried to follow that advice. I would sit in front of a single project for hours, forcing myself to write code even when my brain had turned to mush. It felt like a chore, and the quality of my output suffered.\n\nEventually, I decided to stop fighting my natural urge to bounce between tasks. If I hit a wall with a complex frontend layout, I would switch to styling a CSS animation, or write a quick utility script, or read up on Kotlin. I realized that my brain didn\'t need absolute stillness—it needed variety to stay alert. The variety kept me curious, led to unexpected creative solutions, and prevented burnout. What I once thought was a focus issue was actually my natural coding workflow. Now, I keep two or three projects active. The flexibility keeps my mind sharp, and it\'s become one of my greatest strengths.'
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
