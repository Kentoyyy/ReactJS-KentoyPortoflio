import React, { useState } from 'react';
import './../Style/Navbar.css';
import cvlogo from '../../Images/downloadcv.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <a href='/' className='resume'>  
        <img src={cvlogo} alt='Logo' className='logo' />
        Resume/CV
      </a>

      <div className='menu-icon' onClick={toggleMenu}>
        &#9776;
      </div>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a href='/'>Home</a>
        <a href='/'>Techstack</a>
        <a href='/'>Works</a>
        <a href='/'>Certificates</a>
        <a href='/'>About Me</a>
        <a href='/'>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
