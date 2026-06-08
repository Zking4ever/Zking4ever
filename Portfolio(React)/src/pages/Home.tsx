import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Tools from '../components/UI/ToolList/Tools';
import profile from '../assets/user.png';
import './Home.css';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Responsive, performant websites and web apps — from sleek landing pages to full-scale platforms.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'User-centered designs that are both visually stunning and intuitive to navigate.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile applications built with modern frameworks and clean architecture.',
  },
  {
    icon: '💡',
    title: 'Consulting',
    desc: 'Expert technical guidance to help you plan, build, and scale your digital products.',
  },
];

const JOB_TITLES = [
  'Full Stack Developer',
  'Desktop App Developer',
  'Mobile App Developer',
  'Frontend Developer',
  'Problem Solver',
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page">

        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero-bg-orbs">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">
                Hey <span className="shake-hand">👋</span> I'm
              </p>
              <h1 className="hero-name">
                Astawus<br />
                <span className="gradient-text">Amsalu</span>
              </h1>

              <div className="hero-title-ticker">
                <span className="ticker-prefix">A passionate</span>
                <div className="ticker-container">
                  <div className="ticker-track">
                    {[...JOB_TITLES, ...JOB_TITLES].map((t, i) => (
                      <span key={i} className="ticker-item">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="hero-bio">
                Obsessed with creating interactive, user-friendly tech products
                that solve real problems and deliver delightful experiences.
              </p>

              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">Years Coding</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">20+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">∞</span>
                  <span className="stat-label">Curiosity</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-wrapper animate-float">
                <div className="profile-ring" />
                <img src={profile} alt="Astawus Amsalu" className="profile-img" />
                <div className="profile-badge">
                  <span>💻</span>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-scroll-hint">
            <div className="scroll-dot" />
            <span>Scroll to explore</span>
          </div>
        </section>

        {/* ===== WHAT I DO ===== */}
        <section className="home-section services-section">
          <div className="section">
            <p className="section-label">What I Do</p>
            <h2 className="section-title">Services I Offer</h2>
            <p className="section-desc">
              From concept to deployment — I craft digital experiences that matter.
            </p>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <div key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TECH STACK ===== */}
        <section className="home-section tools-section">
          <div className="section">
            <p className="section-label">Tech Stack</p>
            <h2 className="section-title">What I Build With</h2>
            <p className="section-desc">
              Powerful tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <Tools />
        </section>

        {/* ===== CTA ===== */}
        <section className="home-section cta-section">
          <div className="section">
            <div className="cta-card">
              <div className="cta-glow" />
              <p className="section-label">Let's Collaborate</p>
              <h2 className="cta-title">Have a project in mind? ⚡</h2>
              <p className="cta-desc">
                I'm actively seeking new opportunities. My inbox is always open —
                whether you have a question or just want to say hello!
              </p>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}