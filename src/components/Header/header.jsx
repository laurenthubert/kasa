import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/LOGO.png';

const Header = () => {
  return (
    <nav className='header-container'>
      <Link to="/">
        <img className='logo_kasa' src={logo} alt="logo agence kasa" />
      </Link>
      <div>
        <NavLink to="/" className='link_style'>
          Accueil
        </NavLink>
        <NavLink to="/About" className='link_style'>
          À Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
