import React from 'react';
import './App.css';
import { HomePage, AddBook, BookPage, CartPage } from './components/imports';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Books } from './container/imports';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Infinite Knowledge </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:slug" element={<BookPage />} />
          <Route path="/addbook" element={<BookPage />} />
          <Route path="/book" element={<CartPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
