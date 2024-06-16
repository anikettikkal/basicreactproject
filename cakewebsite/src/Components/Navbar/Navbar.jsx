import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#">Cake Delights</a>
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Our Cakes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    )
}
export default Navbar