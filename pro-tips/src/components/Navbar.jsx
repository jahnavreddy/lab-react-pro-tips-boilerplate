import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  background: 'white',
  color: 'black',
  padding: '5px',
};

const linkStyle = {
  textDecoration: 'none',
};

const headingStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
};

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <Link to={'/'} style={linkStyle}>
        <h1>
          Kalvium
          <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
        </h1>
      </Link>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to={'/about'}>
          <h3 style={headingStyle}>About</h3>
        </Link>
        <Link to={'/contact'}>
          <h3 style={headingStyle}>Contact</h3>
        </Link>
        <Link to={'/forms'}>
          <h3 style={headingStyle}>Registration Form</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
