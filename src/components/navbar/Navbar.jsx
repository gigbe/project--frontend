import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './navbar.css';
import logo from '../../assets/images/logo.png';

const Menu = () => (
  <>
    <p>
      <a href="#home"> home</a>
    </p>
    <p>
      <a href="#ai"> AI</a>
    </p>
    <p>
      <a href="books"> explore</a>
    </p>
    <p>
      <a href="#cart"> cart</a>
    </p>
    <p>
      <a href="#contact us"> contact us</a>
    </p>
  </>
);

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="store_navbar">
      <div className="store_navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
          <Menu />
        </div>
        <div className="navbar-signin-link">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="navbar-menu">
          {activeMenu ? (
            <AiOutlineClose
              color="#ffffff"
              size={30}
              onClick={() => setActiveMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              color="#ffffff"
              size={30}
              onClick={() => setActiveMenu(true)}
            />
          )}
          {activeMenu && (
            <div className="navbar-menu-scale-up">
              <div className="navbar-menu-scale-links">
                <Menu />
                <div className="navbar-signin-mneu-link">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
