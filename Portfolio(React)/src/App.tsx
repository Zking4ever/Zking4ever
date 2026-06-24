import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogContent from './pages/BlogContent';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/*"        element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/blog"     element={<Blog />} />
            <Route path="/blog/:id" element={<BlogContent />} />
          </Routes>
        </div>
      </Router>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
