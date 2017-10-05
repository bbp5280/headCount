import React from 'react';
import Card from '../Card/Card';
// import createFragment from 'react-addons-create-fragment';

const CardContainer = ({ data }) => {
  // const dataArray = Object.keys(data.data);
  const cards = data.map(district => {
      // console.log(district.location);
    return <Card location={district.location}
          data={district.data} />
  })

  return(
    <div>
    
      {cards}
    </div>
  )
}

export default CardContainer;
