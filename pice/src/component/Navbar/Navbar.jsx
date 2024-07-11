import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Chess Game</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/rules">Rules</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn">Quit</button>
      </div>
    </nav>
  );
};

export default Navbar;
