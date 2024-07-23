import React from 'react';
import '../assets/styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'> 
        <h1>NUWAN SIRIWARDHANA</h1>
        <h1>PHOTOGRAPHY</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#photograpy">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header