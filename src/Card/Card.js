import React from 'react';
import styles from './card-styles.css';

const Card = ({ location, data, compare }) => {
  const yearArray = Object.keys(data)

  const mappedYears = yearArray.map((year) => {
    return <li>{year}: {data[year]}</li>
  });

  const clickHandler = () => {
    compare({location: {location},
              data: {data} })
  }

  return (
    <div className="card">
      <button onClick={clickHandler}>Compare Me!</button>
      <h3>{location}</h3>
      <ul>
        {mappedYears}
      </ul>
    </div>);
};

export default Card;
