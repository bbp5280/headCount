import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const Card = ({ location, data, compare, forCompare }) => {
  const yearArray = Object.keys(data);

  const mappedYears = yearArray.map(year => {
    return <li key={year}><span className="bold-year">{year}:</span>{data[year]}</li>

  });

  const clickHandler = () => {
    compare(location);
  }

  const buildCards = (year, click) => {

    if(forCompare === true){
      return(
      <div>
        <h3 className="district">{location}</h3>
        <ul className="list">
          {year}
        </ul>
        <button className="compare-btn" onClick={click}>Remove
        </button>
      </div>)
  } else {
    return(
      <div>
      <h3 className="district">{location}</h3>
      <ul className="list">
        {year}
      </ul>
      <button className="compare-btn" onClick={click}>Click to Compair
      </button>
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
