import React from 'react';
import Card from '../Card/Card';
import styles from './card-container-styles.css';

const CardContainer = ({ data, compare }) => {
  const cards = data.map(district => {
    return <Card location={district.location}
                 data={district.data}
                 key={district.location}
                 compare={compare}/>
  });

  return(
    <div className="card-container">
      {cards}
    </div>
  )
}

export default CardContainer;
