import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h1>Nuwan Siriwardhana</h1>
                <p>PHOTOGRAPHY</p>
            </div>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/photography">Photography</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;