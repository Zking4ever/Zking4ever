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
              <div className="rotater">
                <div className="connector" style={{ "--z": "0" } as React.CSSProperties}>
                  <div className="holder">A</div>
                  <div className="holder">B</div>
                </div>
                <div className="connector" style={{ "--z": "1" } as React.CSSProperties}>
                  <div className="holder">1</div>
                  <div className="holder">2</div>
                </div>
              </div>
            </div>
            {/* <div className="projects-grid">
              {LARGE_PROJECTS.slice(0,3).map((p, i) => (
                <LargerProjectPoster
                  key={p.title} project={p} index={i}
                />
              ))}
            </div>
            <Link to="/projects" className="btn btn-primary" style={{marginTop: '1rem'}}>View All Projects</Link> */}
          </div>
        </section>

  

        

      </main>
    </>
  );
}