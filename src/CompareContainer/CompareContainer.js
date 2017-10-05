import React, { Component } from 'react';
import Card from '../Card/Card';

class CompareContainer extends Component {
  constructor() {
    super();

  }

  render() {
    // const districtsToCompare =
    const comparedDistricts = this.props.compareArray.map ( district => {
      // console.log(district.data);
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
