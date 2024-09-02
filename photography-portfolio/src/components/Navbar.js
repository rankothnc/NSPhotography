import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';


const Navbar = () => {

const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown =()=>{
    setDropdownOpen(!dropdownOpen);
};

    return (
        <nav className='navbar'>
            <div className='logo'>
                <h1>Nuwan Siriwardhana</h1>
                <p>PHOTOGRAPHY</p>
            </div>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li className='dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span>Photography</span>
                    {dropdownOpen && (
                        <ul className='dropdown-menu'>
                            <li><Link to="/wildlife">Wildlife</Link> </li>
                            <li><Link to="/location">Location</Link> </li>
                            <li><Link to="/landscape">Landscape</Link> </li>
                            <li><Link to="/travel">Travel</Link> </li>
                        </ul>
                    )}
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;