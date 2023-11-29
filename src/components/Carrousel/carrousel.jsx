import React, { useState } from 'react';
import '../../components/Carrousel/carrousel.scss';
import arrowLeft from '../../assets/arrow_left.png';
import arrowRight from '../../assets/arrow_right.png';

const Carrousel = ({ images }) => {
  const length = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSuivante = () => {
    if (currentIndex === length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const imagePrecedente = () => {
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className='caroussel__section'>
      <article className='caroussel_container'>
        {length > 1 && (
          <>
            <img src={arrowLeft} alt="fleche de gauche " onClick={imagePrecedente} className='caroussel__arrowright' />
            <img src={arrowRight} alt="fleche de droite " className='caroussel__arrowleft' onClick={imageSuivante} />
            <p className='caroussel__compt'>{currentIndex + 1} / {length}</p>
          </>
        )}
        <img src={images[currentIndex]} className='caroussel__img' alt="caroussel" />
      </article>
    </section>
  );
};

export default Carrousel;
