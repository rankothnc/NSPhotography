import React from 'react';
import '../../assets/styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'> 
        <h1>NUWAN SIRIWARDHANA</h1>
        <h2>PHOTOGRAPHY</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#photograpy">Photograpy</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header