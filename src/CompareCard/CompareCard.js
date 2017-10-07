import React from 'react';
import styles from '../index.css';

const CompareCard = ({ comparisonData}) => {

  return (
    <div className="card compare-card">
      {comparisonData.compared}
    </div>
  );
};

export default CompareCard;
