import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const Card = ({ location, data, compare, forCompare }) => {
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

  const buildCards = (year, click) => {

    if(forCompare === true){
      return(
      <div>
        <div className="top-of-card">
          <h3 className="district">{location}</h3>
          <button className="compare-btn" onClick={click}>Remove
          </button>
        </div>
        <ul className="list">
          {year}
        </ul>
      </div>)
  } else {
    return(
      <div>
      <div className="top-of-card">
        <h3 className="district">{location}</h3>
        <button className="compare-btn" onClick={click}>Compare
        </button>
      </div>
      <ul className="list">
        {year}
      </ul>
    </div>
  )}

  }

  return (

    <div className="card">
      {buildCards(mappedYears, clickHandler)}
    </div>
  )

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.number).isRequired,
  compare: PropTypes.func.isRequired
 }
}

export default Card;
