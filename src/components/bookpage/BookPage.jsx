import React from 'react';
import './bookPage.css';
import { useParams } from 'react-router-dom';
// import data from '../../dataBooks';

function BookPage() {
  const params = useParams();
  const { slug } = params;

  return <div className="slug"> {slug}</div>;
}

export default BookPage;
