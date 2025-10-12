import './App.css'
import Pages from './components/Pages'
import { useState } from 'react'


function App() {

  const [currentPage,setCurrentPage] = useState('projects');

  function handleNavigatorClick(event){
      setCurrentPage(event.target.id);
  }

  return (
    <>
      <div className="wrapper">
        
        <div className='header'>
            <div className="logo">AS</div>
            <nav>
                <span className='navigator' onClick={handleNavigatorClick} id='home'>Home</span>
                <span className='navigator' onClick={handleNavigatorClick} id='about'>About</span>
                <span className='navigator' onClick={handleNavigatorClick} id='projects'>Projects</span>
                <span className='navigator' onClick={handleNavigatorClick} id='contact'>Contact</span>
            </nav>
            <div className="socials">Socials</div>
        </div>
        <div className="content">
            <Pages currentPage={currentPage} />
        </div>
        
      </div>
    </>
  )
}

export default App
