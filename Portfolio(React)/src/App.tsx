import './App.css'
import Pages from './pages/Pages'
import { useState,useEffect } from 'react'


function App() {

  const [currentPage,setCurrentPage] = useState('home');

  function handleNavigatorClick(x:string){
      setCurrentPage(x);
  }
  useEffect(()=>{
    var underConstruction = document.createElement("div");
    underConstruction.className = "under-construction";
    underConstruction.innerHTML = "<h3>🚧 Under Construction 🚧</h3><p>This portfolio website is currently under construction. Please check back later for the full experience!</p>";
    document.body.appendChild(underConstruction);
    return ()=>{
      document.body.removeChild(underConstruction);
    }
  });

  return (
    <>
      <div className="wrapper">
        
        <div className='header'>
            <div className="logo">AS</div>
            <nav>
              <div className="glass" data-page={currentPage}>
                {/*for the background glass moving around the header to identify current page */}
              </div>
                <span className='navigator' onClick={()=>handleNavigatorClick('home')}>Home</span>
                <span className='navigator' onClick={()=>handleNavigatorClick('about')}>About</span>
                <span className='navigator' onClick={()=>handleNavigatorClick('projects')}>Projects</span>
                <span className='navigator' onClick={()=>handleNavigatorClick('contact')}>Contact</span>
            </nav>
            <div className="socials">Socials</div>
        </div>
        <div className="content">
            <Pages currentPage={currentPage} clickHandler={handleNavigatorClick} />
        </div>
        
      </div>
    </>
  )
}

export default App
