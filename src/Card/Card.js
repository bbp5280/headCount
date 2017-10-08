import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const Card = ({ location, data, compare }) => {
  const yearArray = Object.keys(data);

  const mappedYears = yearArray.map(year => {
    return (
      <div className="info-container" key={year}>
        <span className="data">{data[year]}</span>
        <span className="year">{year}</span>
      </div>
    )
  });

  const clickHandler = () => {
    compare(location);
  }

  return (
    <div className="card">
      <div className="top-of-card">
        <h3 className="district">{location}</h3>
        <button className="compare-btn" onClick={clickHandler}>Compare
        </button>
      </div>

      <div className="list">
        {mappedYears}
      </div>
    </div>);
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.number).isRequired,
  compare: PropTypes.func.isRequired
};

export default Card;
