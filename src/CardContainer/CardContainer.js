import React from 'react';
import Card from '../Card/Card';
import styles from '../index.css';
import PropTypes from 'prop-types';

const CardContainer = ({ allData, compare, toggleStateActive }) => {
  const cards = allData.map(district => {
    return <Card
      location={district.location}
      allData={district.data}
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

CardContainer.propTypes = {
  allData: PropTypes.array.isRequired,
  compare: PropTypes.func.isRequired,
  toggleStateActive: PropTypes.func
};

export default CardContainer;
