import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const CompareCard = ({ comparisonData, getAvg }) => {
  return (
    <div className="compare-card">
      <section className="district1">
        <h4 className="district-name">{getAvg.district1}</h4>
        <h5 className="district-avg">Average: {getAvg.district1Average}</h5>
      </section>
      <h3>{comparisonData.compared}</h3>
      <section className="district2">
        <h4 className="district-name">{getAvg.district2}</h4>
        <h5 className="district-avg">Average: {getAvg.district2Average}</h5>
      </section>
    </div>
  );
};

CompareCard.propTypes = {
  comparisonData: PropTypes.object.isRequired
};

export default CompareCard;
