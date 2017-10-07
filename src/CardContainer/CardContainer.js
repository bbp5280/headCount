import React from 'react';
import Card from '../Card/Card';
import styles from '../index.css';

const CardContainer = ({ data, compare }) => {
  const cards = data.map(district => {
    return <Card location={district.location}
                 data={district.data}
                 key={district.location}
                 compare={compare}/>
  });

  return(
    <div className="card-container">
      <h2 className="data-info">Percent of Students in Enrolled in full-day Kinder</h2>
      {cards}
    </div>
  )
}

export default CardContainer;
