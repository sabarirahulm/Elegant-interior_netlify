
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Pages/Img and vid/logo of ET5.png'

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="Container">
      <nav>

        <h3 className="logo">ELEGANT INTERIOR <span className="dot">.</span></h3>
      

        <ul className={isMenuOpen ? 'menu-open' : ''}>
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/design-gallery" className="nav-link">Design Gallery</Link></li>
          <li className="nav-item"><Link to="/modular-kitchen" className="nav-link">Modular Kitchen</Link></li>
          <li className="nav-item"><Link to="/living-room" className="nav-link">Living Room</Link></li>
          <li className="nav-item"><Link to="/bedroom" className="nav-link">Bedroom</Link></li>
          <li className="nav-item"><Link to="/bathroom" className="nav-link">Bathroom</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          <i className="fas fa-times" onClick={closeMenu}></i>
        </ul>
        <i className="fas fa-bars" onClick={openMenu}></i>
      </nav>
    </div>
  );
}

export default Navbar;



