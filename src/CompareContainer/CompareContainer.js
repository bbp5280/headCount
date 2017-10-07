import React, { Component } from 'react';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard';
import styles from '../index.css';
import DistrictRepository from '../helper'
import kinderData from './../../data/kindergartners_in_full_day_program.js';

const CompareContainer = ({ compareArray, districts, comparisonData }) => {

  const getCard = () => {
    const district1 = districts.findByName(compareArray[0]);
    const district2 = districts.findByName(compareArray[1]);
    return [district1, district2];
  }

  const comparedDistricts = getCard().map ( district => {
    return <Card location={district.location}
                 data={district.data}
                 key={district.location} />
  })

  return (
    <div>
      <CompareCard comparisonData={comparisonData} />
      {comparedDistricts}
    </div>
  )

}

export default CompareContainer;
