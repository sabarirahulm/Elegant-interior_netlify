import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="whatsapp">
      <Link to='https://www.whatsapp.com'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" className="image-w" />
      </Link>
    </div>
    <div className="footer-container">
      <div className="company-name">
        <h2>ELEGANT INTERIOR.</h2>
        <Link to='https://www.facebook.com'>
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link to='https://www.twitter.com'>
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to='https://www.instagram.com'>
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to='https://www.youtube.com'>
          <i className="fa-brands fa-youtube"></i>
        </Link>
        <p className="copyrights">© 2024 Elegant Interior ., All rights reserved</p>
      </div>

      <div className="line"></div>


      <div className="OFFERINGS-div">
        <p className="OFFERINGS">OFFERINGS</p>
          <Link to="/modular-kitchen" className="footerlink">Modular Kitchen</Link>
          <Link to="/living-room" className="footerlink">Living Room</Link>
          <Link to="/bedroom" className="footerlink">Bedroom</Link>
          <Link to="/bathroom" className="footerlink">Bathroom</Link>
          <Link to="/bedroom" className="footerlink">Kids bedroom</Link>
          <Link to="/living-room" className="footerlink">TV Unit</Link>
          <Link to="/living-room" className="footerlink">Pooja Unit</Link>
          
      </div>
      
      <div className="line"></div>

      <div className="contactus-div">
      
      <p className="OFFERINGS">Contact Us</p>
        <p className="call-us">Call us</p>
        <Link to="/" className="footerlink">+91 9874563210</Link>

        <p className="call-us">Email us</p>
        <Link to="/" className="footerlink">elegantinteriors@gmail.com</Link>
      </div>

    </div>
    </>
  );
}

export default Footer;
