import React, { Component } from 'react';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard';
import styles from '../index.css';
import DistrictRepository from '../helper'
import kinderData from './../../data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types';

const CompareContainer = ({ compareArray, districts, comparisonData, removeCompare }) => {

  const getCard = () => {
    const district1 = districts.findByName(compareArray[0]);
    const district2 = districts.findByName(compareArray[1]);
    return [district1, district2];
  }

  const getAvg = () => {
    const dist1Avg = districts.findAverage(compareArray[0]);
    const dist2Avg = districts.findAverage(compareArray[1]);
    return { district1: compareArray[0],
             district1Average: dist1Avg,
             district2: compareArray[1],
             district2Average: dist2Avg
            }
  }

  const comparedDistricts = getCard().map ( district => {
      district['forCompare'] = true
    return <Card location={district.location}
                 data={district.data}
                 key={district.location}
                forCompare={district.forCompare}
                removeCompare={removeCompare}/>
  })

  return (
    <div className="compare-card-conatiner">
      <h2 className="comparison-header">Comparison</h2>
      <CompareCard comparisonData={comparisonData}
                   getAvg={getAvg()}/>
      {comparedDistricts}
      <hr />
    </div>
  )
}

Card.propTypes = {
  compareArray: PropTypes.array,
  districts: PropTypes.object,
  comparisonData: PropTypes.object
};

export default CompareContainer;
