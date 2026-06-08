import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme, type Theme } from '../context/ThemeContext';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home',     path: '/'        },
  { label: 'About',    path: '/about'   },
  { label: 'Projects', path: '/projects'},
  { label: 'Blog',     path: '/blog'    },
  { label: 'Contact',  path: '/contact' },
];

const THEME_META: Record<Theme, { label: string; icon: string }> = {
  dark:   { label: 'Dark',   icon: '🌙' },
  light:  { label: 'Light',  icon: '☀️' },
  aurora: { label: 'Aurora', icon: '🌌' },
};

export default function Header() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [themeOpen, setThemeOpen]   = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close theme picker when clicking outside
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
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo" aria-label="Home">
            <span className="logo-mark">AS</span>
            <span className="logo-dot" />
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link${isActive(path) ? ' nav-link--active' : ''}`}
              >
                {label}
                {isActive(path) && <span className="nav-indicator" />}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="header-controls">
            {/* Theme picker */}
            <div className="theme-picker" ref={themeRef}>
              <button
                className="theme-btn"
                onClick={() => setThemeOpen(o => !o)}
                aria-label="Switch theme"
                title={`Theme: ${THEME_META[theme].label}`}
              >
                <span>{THEME_META[theme].icon}</span>
              </button>
              {themeOpen && (
                <div className="theme-dropdown">
                  {(Object.keys(THEME_META) as Theme[]).map(t => (
                    <button
                      key={t}
                      className={`theme-option${theme === t ? ' theme-option--active' : ''}`}
                      onClick={() => { setTheme(t); setThemeOpen(false); }}
                    >
                      <span>{THEME_META[t].icon}</span>
                      <span>{THEME_META[t].label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

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
