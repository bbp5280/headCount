import React from 'react';
import styles from '../index.css';
import icon from '../../assets/headcount-icon.png';

const Header = () => {
  return (
    <nav className="header">
      <img src={icon} />
      <h1>HeadCount</h1>
    </nav>
  );
};

export default Header;
