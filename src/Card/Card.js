import React, { Component } from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';
import List from './List';

class Card extends Component{

  constructor(){
    super();
    this.state = {
      toggleStateActive: false
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.removeClick = this.removeClick.bind(this);
    this.buildCards = this.buildCards.bind(this);
  }

  toggleStateActive(){
    this.setState({
      toggleStateActive: true
    });
  }

  toggleStateInactive(){
    this.setState({
      toggleStateActive: false
    });
  }

  clickHandler() {
    this.props.compare(this.props.location);
    this.toggleStateActive();
  }

  removeClick() {
    this.props.removeCompare(this.props.location);
    this.toggleStateInactive();
  }

  buildCards() {
    if (this.props.forCompare === true) {
      return (
        <div className="card-grouping">
          <div className="top-of-card">
            <h3 className="district">{this.props.location}</h3>
            <button className="compare-btn" onClick={this.removeClick}>Remove
            </button>
          </div>
          <div className="list">
            <List data={this.props.allData}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card-grouping">
          <div className="top-of-card">
            <h3 className="district">{this.props.location}</h3>
            <button
              className={this.state.toggleStateActive ? "compare-btn-off" : "compare-btn"} onClick={this.clickHandler}>Compare
            </button>
          </div>
          <div className="list">
            <List data={this.props.allData} />
          </div>
        </div>
      );
    }

  }

  render(){
    return (
      <div className="card">
        {this.buildCards()}
      </div>
    );
  }
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  allData: PropTypes.objectOf(PropTypes.number).isRequired,
  compare: PropTypes.func.isRequired,
  forCompare: PropTypes.func
};

export default Card;
