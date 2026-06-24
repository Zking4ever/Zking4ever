import TimeLine from '../components/UI/TitmeLine/TitmeLine';
import profile from '../assets/user.png';
import './About.css';
import { FiGithub } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

const EDUCATION = [
  {
    time: '2022 – Present',
    institution: 'Hawassa University — Computer Science',
    content: 'Pursuing my Bachelor’s degree in Computer Science. Focusing on software engineering principles, algorithms, data structures, and database systems, while translating academic concepts into hands-on side projects.',
  },
  {
    time: '2018 – 2022',
    institution: 'High School — Natural Science Focus',
    content: 'Graduated with high honors in sciences. While family and mentors expected me to choose a path in Medicine, I followed my curiosity for logic and programming, dedicating my spare time to learning software development.',
  },
  {
    time: '2012 – 2018',
    institution: 'Early Tech Curiosity',
    content: 'My tech journey began when I dismantled and successfully repaired a broken family desktop computer. That small victory turned me into the local neighborhood tech support and sparked a lifelong passion for computer systems.',
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
      <main className="about-page">

        {/* ===== HERO ===== */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <div className="about-hero-text">
              <p className="section-label">About Me</p>
              <h1 className="about-hero-title">
                About--
              </h1>
              <p className="about-lead">
                My name is ----
              </p>
              <p className="about-bio">
                What began as fixing neighborhood electronics soon evolved into a deep dive into programming languages. I spent years teaching myself C++, Java, and modern web technologies. Despite strong guidance to pursue medicine, I chose Computer Science at university because building software is my true passion. Today, I construct reliable platforms across web, mobile, and desktop. I’m constantly learning, building, and refining my craft.
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