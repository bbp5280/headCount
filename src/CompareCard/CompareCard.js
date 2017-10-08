import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const CompareCard = ({ comparisonData, getAvg }) => {
  return (
    <div className="card compare-card">
    <h4>{getAvg.district1}</h4>
    <h5>Average: {getAvg.district1Average}</h5>
      <h3>{comparisonData.compared}</h3>
      <h4>{getAvg.district2}</h4>
    <h5>Average: {getAvg.district2Average}</h5>
    </div>
  );
};

CompareCard.propTypes = {
  comparisonData: PropTypes.object.isRequired
};

export default CompareCard;
