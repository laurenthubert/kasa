import React from 'react';
import './banner.scss';

const Banner = ({ text, image }) => (
  <div className='banner'>
    <h2 className='banner_text'>{text}</h2>
    <img className='banner_img' src={image} alt="banner" />
  </div>
);

export default Banner;


