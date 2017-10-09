import React from 'react';
import Card from '../Card/Card';
import styles from '../index.css';
import PropTypes from 'prop-types';

const CardContainer = ({ allData, compare, toggleStateActive }) => {
  const cards = allData.map(district => {
    return <Card
      location={district.location}
      data={district.data}
      key={district.location}
      compare={compare}
      toggleStateActive={toggleStateActive} />;
  });

  return (
    <div className="card-container">
      <h2 className="data-info">Percent of Students in Enrolled in Full Day Kinder</h2>
      {cards}
    </div>
  );
};

Card.propTypes = {
  allData: PropTypes.object.isRequired,
  compare: PropTypes.func.isRequired
};

export default CardContainer;
