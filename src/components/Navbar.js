import React from 'react';
import logo from './mediaire.svg';
const Navbar = ({ title, icon }) => {
  return (
    <nav id='main-nav'>
      <div className='container'>
        <img className='logo' src={logo} alt='Logo' />
      </div>
    </nav>
  );
};

export default Navbar;
