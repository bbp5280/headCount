import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const List = ({data}) => {
  const yearArray = Object.keys(data)


  return (
    <div>
      {
        yearArray.map(year => {
        return (
          <div className="info-container" key={year}>
            <span className="data">{data[year]}</span>
            <span className="year">{year}</span>
          </div>
        )
        })
        }
    </div>
  )
};


export default List;
