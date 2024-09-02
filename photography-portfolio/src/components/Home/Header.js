import React from 'react';
import '../../assets/styles/header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'> 
        <h1>NUWAN SIRIWARDHANA</h1>
        <h2>PHOTOGRAPHY</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#photograpy">Photograpy</a>
          <Link to={'/contact'}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header