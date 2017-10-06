import React from 'react';
import styles from './card-styles.css';
import Chart from 'chart.js';

const Card = ({ location, data, compare }) => {
  const yearArray = Object.keys(data);
  console.log(yearArray, data);
  const mappedYears = yearArray.map((year) => {
    //chart needs to be built here - ?
    return <li className="li">{year}: {data[year]}</li>
  });

  const clickHandler = () => {
    compare({location: {location},
              data: {data} });
  }

  return (
    <div className="card">
      <button className="compare-btn" onClick={clickHandler}>+</button>
      <h3 className="district">{location}</h3>
      <ul className="list">
        {mappedYears}
      </ul>
    </div>);
};

export default Card;
