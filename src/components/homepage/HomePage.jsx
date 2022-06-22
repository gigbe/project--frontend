import React from 'react';
import './homePage.css';
import { Ai, Books, Features, Footer, Header } from '../../container/imports';
import { AddBook, BookPage, CartPage, Navbar } from '../../components/imports';

function HomePage() {
  return (
    <div className="App">
      <div className="main-bg">
        <Navbar />
        <Header />
      </div>
      <Ai />
      <Books />

      {/* <CartPage /> */}
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
