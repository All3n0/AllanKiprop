import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; {/* This is the hamburger icon */}
            </div>
            <ul className={menuOpen ? "active" : ""}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}
