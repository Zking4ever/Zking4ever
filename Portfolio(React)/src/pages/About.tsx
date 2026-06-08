import Header from '../components/Header';
import TimeLine from '../components/UI/TitmeLine/TitmeLine';
import profile from '../assets/user.png';
import './About.css';
import { FiGithub } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

const EDUCATION = [
  {
    time: '2022 – Present',
    institution: 'Computer Science',
    content: 'Pursuing Computer Science, specialising in software engineering, algorithms, and system design. Actively building products that bridge theory with real-world impact.',
  },
  {
    time: '2018 – 2022',
    institution: 'High School — Natural Science',
    content: 'Graduated with distinction in sciences. While everyone expected Medicine, I chose to follow code — the language that lets you build anything imaginable.',
  },
  {
    time: '2012 – 2018',
    institution: 'Primary & Middle School',
    content: 'Early curiosity sparked by fixing a broken desktop (a.k.a. PLO). This moment turned neighbourhood tech-support into a lifelong passion for technology.',
  },
];

const SKILLS_GROUPS = [
  { label: 'Frontend',  items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'] },
  { label: 'Backend',   items: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'MongoDB'] },
  { label: 'Tools',     items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'] },
  { label: 'Mobile',    items: ['Android', 'Java', 'Kotlin'] },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">

        {/* ===== HERO ===== */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <div className="about-hero-text">
              <p className="section-label">About Me</p>
              <h1 className="about-hero-title">
                The Dev Behind the Code
              </h1>
              <p className="about-lead">
                My name is <strong>Astawus</strong> — meaning <em>"remember!"</em> —
                and I sure do. My tech journey began with a broken desktop, a week of
                troubleshooting, and the quiet realisation that I could bend machines
                to my will. That feeling never left.
              </p>
              <p className="about-bio">
                From fixing hardware in the neighbourhood to mastering full-stack development,
                my obsession with building things grew through C++, Java, HTML, CSS, and JavaScript.
                Even when everyone expected me to go into Medicine, I chose Computer Science —
                and I've never looked back. Today I build ground-breaking products across web,
                mobile and desktop. There's a lot more to come, so stay tuned.
              </p>
              <div className="about-hero-socials">
                <a href="https://github.com/Zking4ever" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <FiGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/astawus-amsalu-281048339/" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <LuLinkedin /> LinkedIn
                </a>
                <a href="mailto:yanosastawus@gmail.com" className="social-pill">
                  <MdOutlineEmail /> Email
                </a>
              </div>
            </div>

            <div className="about-hero-image">
              <div className="about-img-wrapper">
                <img src={profile} alt="Astawus Amsalu" className="about-profile-img" />
                <div className="about-img-ring" />
              </div>

              {/* Fun fact cards */}
              <div className="about-fun-card about-fun-card--1">
                <span className="fun-icon">⚡</span>
                <div>
                  <strong>CS Student</strong>
                  <span>Full Stack Dev</span>
                </div>
              </div>
              <div className="about-fun-card about-fun-card--2">
                <span className="fun-icon">💻</span>
                <div>
                  <strong>5+ Years</strong>
                  <span>of Coding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="about-skills-section">
          <div className="about-section-inner">
            <p className="section-label">Skill Set</p>
            <h2 className="section-title">What I Know</h2>
            <div className="skills-grid">
              {SKILLS_GROUPS.map(group => (
                <div key={group.label} className="skills-group">
                  <h3 className="skills-group-label">{group.label}</h3>
                  <div className="skills-chips">
                    {group.items.map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EDUCATION TIMELINE ===== */}
        <section className="about-education-section">
          <div className="about-section-inner">
            <p className="section-label">Background</p>
            <h2 className="section-title">Education & Journey</h2>
            <div className="timeline-list">
              {EDUCATION.map((e) => (
                <TimeLine
                  key={e.time}
                  time={e.time}
                  institution={e.institution}
                  content={e.content}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}