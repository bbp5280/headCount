import React, { Component } from 'react';
import Card from '../Card/Card';
import styles from '../index.css';
import DistrictRepository from '../helper'
import kinderData from './../../data/kindergartners_in_full_day_program.js';

class CompareContainer extends Component {
  constructor() {
    super();
    this.state = {
      compareData: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    //this.compareData(nextProps)
  }

  compareData(props) {
    console.log(props.compareArray);
  }

  getCard(props) {
    //console.log(this.props.districts);
    const district1 = this.props.districts.findByName(this.props.compareArray[0].location);
    const district2 = this.props.districts.findByName(this.props.compareArray[1].location);
    return [district1, district2];
  }


  render() {
    console.log(this.getCard());
    const comparedDistricts = this.getCard().map ( district => {
      return <Card location={district.location}
                   data={district.data}
                   key={district.location} />
    })

    return (
      <div>{comparedDistricts}</div>
    )
  }
}

export default CompareContainer;
