import React from 'react';
import '../../components/Host/host.scss';

const Host = ({ name, picture }) => {
  return (
    <div className='host__container'>
      <h3 className='host__name'>{name}</h3>
      <img className='host__picture' src={picture} alt={name} />
    </div>
  );
}

export default Host;

