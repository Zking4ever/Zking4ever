import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
        <div className="logo">AS</div>
        <nav>
          <div className="glass" data-page={'home'}>
              {/*for the background glass moving around the header to identify current page */}
          </div>
          <Link className='navigator' to='/home'>Home</Link>
          <Link className='navigator' to='/about'>About</Link>
          <Link className='navigator' to='/projects'>Projects</Link>
          <Link className='navigator' to='/contact'>Contact</Link>
        </nav>
    </div>
  )
}
