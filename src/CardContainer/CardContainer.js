import React from 'react';
import Card from '../Card/Card';
import styles from '../index.css';
import PropTypes from 'prop-types';

const CardContainer = ({ data, compare, toggleStateActive }) => {
  const cards = data.map(district => {
    return <Card location={district.location}
                 data={district.data}
                 key={district.location}
                 compare={compare}
                 toggleStateActive={toggleStateActive}
                />
  });

  return(
    <div className="card-container">
      <h2 className="data-info">Percent of Students in Enrolled in Full Day Kinder</h2>
      {cards}
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  compare: PropTypes.func.isRequired
};

export default CardContainer;
