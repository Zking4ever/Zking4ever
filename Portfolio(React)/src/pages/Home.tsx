import { Link } from 'react-router-dom';
import './Home.css';
import { LARGE_PROJECTS } from '../pages/Projects';
import LargerProjectPoster from '../components/UI/ProjectCard/LargeProjectPoster';

export default function Home() {

  return (
    <>
      <main className="home-page">
        <section className="home-section projects-preview-section">
          <div className="section">
            <div className="project-hero">
                  <div className="left">
                    <div className="project-poster">
                      Poster
                    </div>
                    <div className="project-content">
                      <span className='title'>Content</span>
                      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, quaerat necessitatibus voluptate neque, tempora laborum mollitia omnis accusantium fugiat officia, quod repellat delectus illo nulla consequuntur itaque. Saepe, sunt omnis exercitationem non eos incidunt recusandae, vel eius soluta ducimus assumenda?</span>
                    </div>
                    </div>
                  <div className="right">
                    <div className="logo"></div>
                    <div className="features">
                      <span style={{fontSize:17,fontWeight:'bold'}}> Features</span>
                      <ul>
                        <li>Feature Lorem ipsum dolor sit amet.</li>
                        <li>Feature one</li>
                        <li>Feature one</li>
                        <li>Feature one</li>
                        <li>Feature one</li>
                      </ul>
                    </div>
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