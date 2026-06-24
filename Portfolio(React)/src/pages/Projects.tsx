import ProjectCard from '../components/UI/ProjectCard/ProjectCard';
import LargeProjectPoster from '../components/UI/ProjectCard/LargeProjectPoster';
import './Projects.css';

/* ---- DATA ---- */
export interface SmallProject {
  type: 'small';
  title: string;
  description: string;
  link: string;
  gitlink?: string;
  tools: string[];
}

export interface LargeProject {
  type: 'large';
  title: string;
  tagline: string;
  description: string;
  link: string;
  gitlink?: string;
  tools: string[];
  category: string;
  panels: string[]; // up to 4 colour/gradient strings for the comic-panel look
  accent: string;
}

export const LARGE_PROJECTS: LargeProject[] = [
  {
    type: 'large',
    title: 'ODA Social Media',
    tagline: 'Connect. Share. Engage.',
    description:
      'A full-featured social media platform with real-time notifications, user profiles, friend connections, and dynamic content sharing — built entirely from scratch.',
    link: 'https://oda.social-networking.me',
    tools: ['HTML', 'JavaScript', 'CSS', 'PHP', 'MySQL'],
    category: 'Social Platform',
    panels: [
      'linear-gradient(135deg,#1a0533,#3d1166)',
      'linear-gradient(135deg,#0a1a3a,#1a3d64)',
      'linear-gradient(135deg,#1a2d00,#3a6000)',
      'linear-gradient(135deg,#330010,#6b0022)',
    ],
    accent: '#a855f7',
  },
  {
    type: 'large',
    title: 'Easter Wish Board',
    tagline: 'Speak your heart anonymously.',
    description:
      'An aesthetic real-time wish board where users post thoughts and feelings anonymously. Seamless UX with live updates, giving everyone a voice with no barriers.',
    link: 'https://easterchat.atwebpages.com',
    tools: ['HTML', 'JavaScript', 'CSS', 'PHP'],
    category: 'Community App',
    panels: [
      'linear-gradient(135deg,#1a1000,#3d2a00)',
      'linear-gradient(135deg,#0d1a00,#254700)',
      'linear-gradient(135deg,#001a1a,#00474a)',
      'linear-gradient(135deg,#1a000d,#4a0024)',
    ],
    accent: '#f59e0b',
  },
];

export const SMALL_PROJECTS: SmallProject[] = [
  {
    type: 'small',
    title: 'Tic-Tac-Toe Game',
    description:
      'Interactive classic Tic-Tac-Toe with 2-player support and automatic winner detection.',
    link: 'https://zking4ever.github.io/Tic-Tac-Toe-Game/',
    gitlink: 'https://github.com/Zking4ever/Tic-Tac-Toe-Game',
    tools: ['HTML', 'JavaScript', 'CSS'],
  },
  {
    type: 'small',
    title: 'JS Practice Hub',
    description:
      'A collection of interactive JavaScript experiments and mini-projects demonstrating core concepts.',
    link: 'https://zking4ever.github.io/practice-javascript/',
    gitlink: 'https://github.com/Zking4ever/practice-javascript',
    tools: ['JavaScript', 'HTML', 'CSS'],
  },
];

/* ---- COMPONENT ---- */
export default function Projects() {
  return (
    <>
      <main className="projects-page">

        {/* Page Hero */}
        <section className="projects-hero">
          <div className="projects-hero-inner">
            <p className="section-label">Portfolio</p>
            <h1 className="projects-hero-title">
              Things I've <span className="gradient-text">Built</span>
            </h1>
            <p className="projects-hero-desc">
              A curated mix of large-scale platforms and focused side projects —
              each one a chapter in my dev story.
            </p>
          </div>
        </section>

        {/* ===== FEATURED / LARGE PROJECTS ===== */}
        <section className="featured-section">
          <div className="featured-inner">
            <div className="featured-header">
              <span className="section-label">Featured Work</span>
              <h2 className="section-title featured-title">Large Projects</h2>
              <div className="divider" />
            </div>
            <div className="large-projects-list">
              {LARGE_PROJECTS.map((p, i) => (
                <LargeProjectPoster key={p.title} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== SMALL PROJECTS ===== */}
        <section className="small-projects-section">
          <div className="small-projects-inner">
            <div className="featured-header">
              <span className="section-label">Other Work</span>
              <h2 className="section-title featured-title">Smaller Projects</h2>
              <div className="divider" />
            </div>

            <div className="small-projects-category">
              <h3 className="category-title">
                Web <span className="category-title-alt">Development</span>
              </h3>
              <div className="category-connect-line" />
            </div>

            <div className="small-projects-list">
              {SMALL_PROJECTS.map((p, i) => (
                <div key={p.title} className="small-project-entry-wrap">
                  {i > 0 && <div className="project-connect-line" />}
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    link={p.link}
                    gitlink={p.gitlink}
                    tools={p.tools}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}