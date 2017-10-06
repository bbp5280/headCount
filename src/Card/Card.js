import React from 'react';
import styles from '../index.css';
//import Chart from 'chart.js';

const Card = ({ location, data, compare }) => {
  const yearArray = Object.keys(data);


  const mappedYears = yearArray.map(year => {
    return <li key={year}>{year}: {data[year]}</li>

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
