import React from "react";
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-logo">
          <span>Pavan Arravali</span>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="header-options">
          <label htmlFor="menu-toggle" className="close-icon">&times;</label>
          <div className="header-option">
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#resume">Resume</a>
            <a href="#contactme">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}
