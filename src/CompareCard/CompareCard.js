import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const CompareCard = ({ comparisonData}) => {

  return (
    <div className="card compare-card">
      {comparisonData.compared}
    </div>
  );
};

CompareCard.propTypes = {
  comparisonData: PropTypes.object.isRequired
};

export default CompareCard;
