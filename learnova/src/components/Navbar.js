import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav>
        <li id="logo">LEAR<span>NOVA</span></li>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/prices">Prices</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/profile">Profile</a></li>
        </ul>
        <button href="#">Login/Register</button>
    </nav>
  );
}

export default Navbar;
