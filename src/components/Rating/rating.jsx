import React from 'react';
import starActive from '../../assets/star_active.png';
import starInactive from '../../assets/star_inactive.png';
import '../../components/Rating/rating.scss';

const Rating = ({ rating }) => {
  const stars = [starInactive, starInactive, starInactive, starInactive, starInactive];
  const int = parseInt(rating);
  const fill = stars.fill(starActive, 0, int);

  return (
    <div className="rating">
      {fill.map((constante, index) => (
        <img key={`${constante}-${index}`} src={constante} alt="starActive" className='stars' />
      ))}
    </div>
  );
};

export default Rating;

