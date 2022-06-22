import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <div className="footer" id="contact us">
      <div className="footer-header">
        <h1>
          There’s never been a better time to get some insight to the big
          questions out there
        </h1>
      </div>

      <div className="explore">
        <a href="#books">keep exploring</a>
      </div>
      <div className="footer-links">
        <div className="footer-logo">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
          <p>pwoerd by bathi @2022</p>
        </div>
        <div className="footer-content">
          <p>get in touch</p>
          <p>myemail@gmail.com</p>
          <p>contact with us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
