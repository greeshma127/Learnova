import React from "react";

function Navbar() {
  return (
    <nav>
        <li id="logo">LEAR<span>NOVA</span></li>
        <ul>
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
