import React from 'react';
import Card from '../Card/Card';
import styles from '../index.css';
import PropTypes from 'prop-types';

const CardContainer = ({ allData, compare, compareArray }) => {

  const cards = allData.map(district => {
    return <Card
      location={district.location}
      allData={district.data}
      key={district.location}
      compare={compare}
      compareArray={compareArray}
    />;
  });

  return (
    <div className="card-container">
      <h2 className="data-info">
        Percent of Students in Enrolled in Full Day Kinder</h2>
      {cards}
    </div>
  );
};

CardContainer.propTypes = {
  allData: PropTypes.array,
  compare: PropTypes.func,
  toggleStateActive: PropTypes.func,
  compareArray: PropTypes.array
};

export default CardContainer;
