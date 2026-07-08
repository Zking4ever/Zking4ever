import { Link } from 'react-router-dom';
import './Home.css';
import { LARGE_PROJECTS } from '../pages/Projects';
import LargerProjectPoster from '../components/UI/ProjectCard/LargeProjectPoster';
import ProjectPreview from '../components/UI/ProjectCard/ProjectPreview';
import { useRef, useState } from 'react';

export default function Home() {

  const [state, setState] = useState(0);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isScrolling.current) return;

    const scrollAmount = e.deltaY;

    if (scrollAmount === 0) return;

    isScrolling.current = true;
    setState((prev) => scrollAmount > 0 ? Math.min(prev + 1, 4) : Math.max(prev - 1, 0) );
   
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(${state * 90}deg)`;
    }
  };
    setTimeout(() => {
      (isScrolling.current ? isScrolling.current = false : null);
    }, 500); 

  return (
    <>
      <main className="home-page">
        <section className="home-section projects-preview-section">
          <div className="section">
            <div className="rotate-contaner">
              <div className="rotater"ref={containerRef} onWheel={handleScroll}>
                <div className="connector" style={{ "--z": "0" } as React.CSSProperties}>
                  <div className="holder"><ProjectPreview /></div>
                  <div className="holder"><ProjectPreview /></div>
                </div>
                <div className="connector" style={{ "--z": "1" } as React.CSSProperties}>
                  <div className="holder"><ProjectPreview /></div>
                  <div className="holder"><ProjectPreview /></div>
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