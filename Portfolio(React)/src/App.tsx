import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  function UnderConstruction(){
        // var underConstruction = document.createElement("div");
        // underConstruction.className = "under-construction";
        // underConstruction.innerHTML = "<h3>🚧 Under Construction 🚧</h3><p>This portfolio website is currently under construction. Please check back later for the full experience!</p>";
        // document.body.appendChild(underConstruction);
  }
  function ConstructionRemover(){
      // var underConstruction = document.createElement("div");
      // document.body.removeChild(underConstruction);
    }
  useEffect(()=>{

      UnderConstruction()

    return ()=>{ConstructionRemover};
  });

  return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
  )
}

export default App
