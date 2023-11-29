import React, { useState } from 'react';
import dropUP from "../../assets/dropUP.png"
import'../Collapse/collapse.scss';

const Collapse = ({ title, content }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className='collapse' >
      <div className='collapse__title__img' onClick={toggleCollapse} >
        <h3>{title}</h3>
        <img src={dropUP} alt="Drop Up" className={`drop__up ${collapse ? "rotate" : ""}`} />
      </div>
      <div className={`content ${collapse ? "return" : ""}`}>
        {collapse && <p className='collapse__text'>{content}</p>}
      </div>
    </div>
  );
}

export default Collapse;


