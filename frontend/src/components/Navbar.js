

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; 

const Navbar = ({ token, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-title">
                <Link to="/">Todo App</Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                ☰ 
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                {token ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link to="/tasks">Tasks</Link>
                        <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
