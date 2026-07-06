import { Link } from 'react-router-dom';
import './Home.css';
import { LARGE_PROJECTS } from '../pages/Projects';
import LargerProjectPoster from '../components/UI/ProjectCard/LargeProjectPoster';
import ProjectPreview from '../components/UI/ProjectCard/ProjectPreview';

export default function Home() {

  return (
    <>
      <main className="home-page">
        <section className="home-section projects-preview-section">
          <div className="section">
            <div className="rotate-contaner">
              <div className="connector">
                <ProjectPreview />
                <ProjectPreview />
              </div>
            </div>
            <div className="projects-grid">
              {LARGE_PROJECTS.slice(0,3).map((p, i) => (
                <LargerProjectPoster
                  key={p.title} project={p} index={i}
                />
              ))}
            </div>
            <Link to="/projects" className="btn btn-primary" style={{marginTop: '1rem'}}>View All Projects</Link>
          </div>
        </section>

  

        

      </main>
    </>
  );
}