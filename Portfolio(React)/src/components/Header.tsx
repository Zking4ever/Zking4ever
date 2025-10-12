import React from 'react';
const projecst = '../pages/Projects.jsx'


interface HeaderProps {
  navLinks: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;