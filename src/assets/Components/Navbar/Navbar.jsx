import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
        <a href='/' className='resume'>Resume/CV</a>

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