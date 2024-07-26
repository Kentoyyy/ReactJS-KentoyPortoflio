import React from 'react'
import './../Style/Navbar.css'
import cvlogo from '../../Images/downloadcv.png'

const Navbar = () => {
  return (
    <header className='header'>
         <a href='/' className='resume'>  
        <img src={cvlogo} alt='Logo' className='logo' />
        Resume/CV
      </a>

        <nav className='navbar'>
            <a href='/'>Home</a>
            <a href='/'>Tech</a>
            <a href='/'>Works</a>
            <a href='/'>Certificates</a>
            <a href='/'>About Me</a>
            <a href='/'>Contact</a>
        </nav>
    </header>
  )
}

export default Navbar