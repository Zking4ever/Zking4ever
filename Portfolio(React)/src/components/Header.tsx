import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme, type Theme } from '../context/ThemeContext';
import './Header.css';
import logo from '../assets/logo.png';
import lightLogo from '../assets/light-logo.png';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';
import { LuLinkedin } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import { ImCool } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";

const NAV_LINKS = [
  { label: 'Home',     path: '/'        },
  { label: 'About',    path: '/about'   },
  { label: 'Projects', path: '/projects'},
  { label: 'Blog',     path: '/blog'    },
  { label: 'Contact',  path: '/contact' },
];

const THEME_META: Record<Theme, { label: string; icon: React.ReactNode }> = {
  dark:   { label: 'Dark',   icon: <LuMoon /> },
  light:  { label: 'Light',  icon: <IoSunnyOutline /> },
  aurora: { label: 'Cool', icon: <ImCool /> },
};

export default function Header() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen]     = useState(false);
  const [themeOpen, setThemeOpen]   = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' || location.pathname === '/home'
                 : location.pathname.startsWith(path);

  return (
    <>
      <header className={`header`}>
          <div className="header-logo"
                ref={themeRef}
                onClick={() => setThemeOpen(o => !o)}
                aria-label="More settings"
                title={`Site settings (current theme: ${THEME_META[theme].label})`}
              >
            <img src={theme=='light' ? logo : lightLogo} alt="Logo" className="logo-image" />
            <div className="details">
              <span className="name">Astawus Amsalu</span>
              <span>Fullstack dev</span>
            </div>
            <div className="icon">
              <BsThreeDotsVertical />
            </div>
            {themeOpen && (
                <div className="theme-dropdown">
                  {(Object.keys(THEME_META) as Theme[]).map(t => (
                    <button
                      key={t}
                      className={`theme-option${theme === t ? ' theme-option--active' : ''}`}
                      onClick={() => { setTheme(t); setThemeOpen(false); }}
                    >
                      {THEME_META[t].icon}
                      <span>{THEME_META[t].label}</span>
                    </button>
                  ))}
                </div>
              )}
          </div>
          
          <nav className="header-nav" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link${isActive(path) ? ' nav-link--active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          {/* Socals */}
          <div className="socials">
            <a href="https://github.com/Zking4ever" target="_blank"><FiGithub /></a>
            <a href="https://linkedin.com/in/astawus-amsalu-281048339" target="_blank"><LuLinkedin /></a>
            <a href="https://www.instagram.com/astawusamsalu/" target="_blank"><FaInstagram /></a>
            <a href="https://t.me/astawus12" target="_blank"><LiaTelegramPlane /></a>
          </div>

          <div className="header-controls">
             {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-inner">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`mobile-nav-link${isActive(path) ? ' mobile-nav-link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mobile-theme-row">
              {(Object.keys(THEME_META) as Theme[]).map(t => (
                <button
                  key={t}
                  className={`mobile-theme-btn${theme === t ? ' mobile-theme-btn--active' : ''}`}
                  onClick={() => setTheme(t)}
                  title={THEME_META[t].label}
                >
                  {THEME_META[t].icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
