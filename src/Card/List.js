import React from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';

const List = ({ data }) => {
  const yearArray = Object.keys(data);

  const makeInfoContainer = yearArray.map(year => {
    if (data[year] >= 0.75) {
      return (
        <section className="info-container" key={year}>
          <span className="data" style={{color: '#602073'}}>{data[year]}</span>
          <span className="year">{year}</span>
        </section>
      );
    } else if (data[year] >= 0.5) {
      return (
        <section className="info-container" key={year}>
          <span className="data" style={{color: '#248793'}}>{data[year]}</span>
          <span className="year">{year}</span>
        </section>
      );
    } else {
      return (
        <section className="info-container" key={year}>
          <span className="data">{data[year]}</span>
          <span className="year">{year}</span>
        </section>
      );
    }
  });

  return (
    <div>{makeInfoContainer}</div>
  );
};

List.propTypes = {
  data: PropTypes.object
};

export default List;
