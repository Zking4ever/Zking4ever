import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const JOB_TITLES = [
  'Full Stack Developer',
  'Desktop App Developer',
  'Mobile App Developer',
  'Frontend Developer',
  'Problem Solver',
];

function MobileHome() {

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
  )
}

export default MobileHome
