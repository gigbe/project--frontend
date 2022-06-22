import React from 'react';
import './header.css';
import bodyai from '../../assets/images/bodyai.png';

function Header() {
  return (
    <div className="main-header" id="home">
      <div className="header-content">
        <h1 className="main-text">
          Something is happening in the world, something is changing and not
          everyone understands it, those who know just think they do...
        </h1>
        <p>
          If you are here, you probably feel it a bit around and see that
          something is starting, you want to know more, explore and take part in
          a developing AI word .
        </p>
        <p> WELCOME TO MY BOOK STORE</p>
        <div className="header-input">
          <input type="email" placeholder="your email eddress" />
          <button type="button">Stay Tuned </button>
        </div>
        <div className="mini-text">
          <p>
            There’s never been a better time to learn data analytics and enter
            the growing field!
          </p>
        </div>
      </div>
      <div className="main-image">
        <img src={bodyai} alt="main-ai-img" />
      </div>
    </div>
  );
}

export default Header;
