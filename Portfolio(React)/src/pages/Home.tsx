import { useState, useEffect } from 'react';
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
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % JOB_TITLES.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="home-page">

        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero-grid-bg" />
          <div className="hero-glow-bg" />

          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">
                Hey <span className="shake-hand">👋</span> I'm
              </p>
              <h1 className="hero-name">Astawus Amsalu</h1>

              <div className="hero-role-wrapper">
                <p className="hero-role-prefix">A passionate</p>
                <h2 className={`hero-role-title ${fade ? 'fade-in' : 'fade-out'}`}>
                  {JOB_TITLES[roleIndex]}
                </h2>
              </div>

              <p className="hero-tagline">
                obssesed in creating interactive and user-friendly tech products.
              </p>

              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </div>
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