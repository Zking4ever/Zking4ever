import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogContent from './pages/BlogContent';


function App() {

  return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogContent />} />
          </Routes>
        </Router>
        <Footer />
      </div>
  )
}

export default App
