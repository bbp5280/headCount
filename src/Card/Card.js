import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const Card = ({ location, data, compare }) => {
  const yearArray = Object.keys(data);

  // findDistrictAverage() {
    // const districtSum = yearArray.reduce((acc, year) => {
    //   acc += data[year];
    //   return acc;
    // }, 0);
    //
    // const districtAverage = Math.round((districtSum / 10) * 1000) / 1000;
    //console.log(districtAverage);
    //return findAverage;
  //}

  const mappedYears = yearArray.map(year => {
    return <li key={year}><span className="bold-year">{year}:</span>{data[year]}</li>

  });

  const clickHandler = () => {
    compare(location);
  }

  return (
    <div className="card">
      <h3 className="district">{location}</h3>
      <ul className="list">
        {mappedYears}
      </ul>
      <button className="compare-btn" onClick={clickHandler}>Click to Compare
      </button>
    </div>);
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.number).isRequired,
  compare: PropTypes.func.isRequired
};

export default Card;
