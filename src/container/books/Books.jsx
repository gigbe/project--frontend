import React from 'react';
import './books.css';
// import data from '../../dataBooks.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_REQUEST_SUCCESS':
      return { ...state, loading: false, books: action.payload };
    case 'FETCH_REQUEST_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Books() {
  const [{ loading, books, error }, dispatch] = useReducer(reducer, {
    books: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const fetchResult = await axios.get('http://localhost:3000/books');
        console.log(fetchResult);
        dispatch({ type: 'FETCH_REQUEST_SUCCESS', payload: fetchResult.data });
      } catch (error) {
        dispatch({ type: 'FETCH_REQUEST_FAIL', payload: error.message });
      }
    };
    getData();
  }, []);

  return (
    <div className="collection-section" id="books">
      <div className="header-collection">
        <h1>
          infinite knowledge with our <br /> collection books
        </h1>
      </div>
      <div className="main-books">
        {books.map((book) => (
          <div className="single-book" key={book.slug}>
            <Link to={`/books/${book.slug}`}>
              <img src={book.image} alt={book.title} />
            </Link>
            <div className="content-book">
              <Link to={`/books/${book.slug}`}>
                <p className="title">{book.title}</p>
              </Link>
              <p className="auther">{`Auther: ${book.auther}`} </p>
              <p>{`Price: ${book.price} $`}</p>
              <p>{`Pages: ${book.pages}`}</p>
              <p>Description:</p>
              <p className="des-book">{book.description}</p>
              <button type="button">Add To Cart </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
