import React from 'react';
import { Link } from 'react-router-dom';
import './cards.scss';

const Cards = ({ id, cover, title }) => (
  <Link to={`/logements/${id}`} className='cards'>
    <figure className='cards__cont'>
      <img className='cards__img' src={cover} alt="" />
      <figcaption className='cards__title'>{title}</figcaption>
    </figure>
  </Link>
);

export default Cards;

