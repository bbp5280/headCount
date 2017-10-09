import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';
import List from './List'

const Card = ({ location, allData, compare, forCompare, removeCompare }) => {
  const yearArray = Object.keys(allData);

  const clickHandler = () => {
    compare(location);
  };

  const removeClick = ()=>{
    removeCompare(location);
  };

  const buildCards = () => {

    if (forCompare === true){
      return (
        <div>
          <div className="top-of-card">
            <h3 className="district">{location}</h3>
            <button className="compare-btn" onClick={removeClick}>Remove
            </button>
          </div>
          <ul className="list">
            <List data={allData} />
          </ul>
        </div>);
    } else {
      return (
        <div>
          <div className="top-of-card">
            <h3 className="district">{location}</h3>
            <button className="compare-btn" onClick={clickHandler}>Compare
            </button>
          </div>
          <ul className="list">
            <List data ={allData}/>
          </ul>
        </div>
      );
    }

  };

  return (

    <div className="card">
      {buildCards()}
    </div>
  );

};

Card.propTypes = {
  location: PropTypes.string,
  allData: PropTypes.objectOf(PropTypes.number),
  forCompare: PropTypes.func,
  compare: PropTypes.func,
  removeCompare: PropTypes.func
};

export default Card;
