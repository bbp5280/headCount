import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const Card = ({ location, allData, compare, forCompare, removeCompare }) => {
  const yearArray = Object.keys(allData);

  const mappedYears = yearArray.map(year => {
    return (
      <div className="info-container" key={year}>
        <span className="data">{allData[year]}</span>
        <span className="year">{year}</span>
      </div>
    );
  });

  const clickHandler = () => {
    compare(location);
  };

  const removeClick = ()=>{
    removeCompare(location);
  };

  const buildCards = (year, click) => {

    if (forCompare === true){
      return (
        <div>
          <div className="top-of-card">
            <h3 className="district">{location}</h3>
            <button className="compare-btn" onClick={removeClick}>Remove
            </button>
          </div>
          <ul className="list">
            {year}
          </ul>
        </div>);
    } else {
      return (
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
      );
    }

  };

  return (

    <div className="card">
      {buildCards(mappedYears, clickHandler)}
    </div>
  );

};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  allData: PropTypes.objectOf(PropTypes.number).isRequired,
  forCompare: PropTypes.func,
  compare: PropTypes.func,
  removeCompare: PropTypes.func
};

export default Card;
