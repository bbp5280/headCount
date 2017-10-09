import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';
import searchIcon from '../../assets/search-icon.svg';

const Controls = ({handleSearch}) =>{
return (
    <div>
      <input
        type='text'
        placeholder='Search by District'
        onChange={handleSearch} />
      <img className="search-icon" src={searchIcon}/>
    </div>
  );
};

Controls.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Controls;
