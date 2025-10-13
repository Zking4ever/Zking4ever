import './App.css'
import Home from './pages/Home';
import Pages from './pages/Pages'
import { useState } from 'react'


function App() {

  const [currentPage,setCurrentPage] = useState('home');

  function handleNavigatorClick(event){
      setCurrentPage(event.target.id);
  }

  return (
    <>
      <div className="wrapper">
        
        <div className='header'>
            <div className="logo">AS</div>
            <nav>
              <div className="glass" page={currentPage}>
                {/*for the background glass moving around the header to identify current page */}
              </div>
                <span className='navigator' onClick={handleNavigatorClick} id='home'>Home</span>
                <span className='navigator' onClick={handleNavigatorClick} id='about'>About</span>
                <span className='navigator' onClick={handleNavigatorClick} id='projects'>Projects</span>
                <span className='navigator' onClick={handleNavigatorClick} id='contact'>Contact</span>
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
