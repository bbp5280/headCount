import React from 'react';


const Card = ({location, data})=>{
  const yearArray = Object.keys(data)

  const mappedYears = yearArray.map((year)=>{
    return <li>{year}: {data[year]}</li>
  })


  return (
    <div>
      <h3>{location}</h3>
      <ul>
        {mappedYears}
      </ul>
    </div>)
}

export default Card;
