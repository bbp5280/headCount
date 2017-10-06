import React, { Component } from 'react';
import Card from '../Card/Card';
import DistrictRepository from '../helper'
import kinderData from './../../data/kindergartners_in_full_day_program.js';


class CompareContainer extends Component {
  constructor() {
    super();
    this.state = {
      compareData: {}
    }
  }

  componentWillReceiveProps(nextProps){
    this.compareData(nextProps)
  }

  compareData(props){
    const district1 = props.compareArray[0]
    const district2 = props.compareArray.splice(0,1)
    const obj = Object.assign({}, district1)
    console.log(obj.location)

    const district = new DistrictRepository(kinderData)
    // const averages = district.compareDistrictAverages(district1, district2 )
      // console.log(averages);
  }

//move or call this in props change life cycle

// will render or mount thing when all parts are there only

//possibly use prep dom for render to get things in right order

  render() {

    const comparedDistricts = this.props.compareArray.map ( district => {
      return <Card location={district.location.location}
                   data={district.data.data}
                   key={district.location.location} />
    })

    return (
      <div>{comparedDistricts}</div>
    )
  }
}

export default CompareContainer;
