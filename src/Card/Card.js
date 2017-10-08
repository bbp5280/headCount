import React, { Component } from 'react';
import styles from '../index.css';
import PropTypes from 'prop-types';
import List from './List'



class Card extends Component{

  constructor(){
    super()
    this.state = {
      toggleStateActive: false,
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.removeClick = this.removeClick.bind(this)
    this.buildCards = this.buildCards.bind(this)
  }


  toggleStateActive(){
    this.setState({
      toggleStateActive: true,
    })
  }

  toggleStateInactive(){
    this.setState({
      toggleStateActive: false,
    })
  }

  clickHandler (props) {
    this.props.compare(this.props.location);
    this.toggleStateActive()
  }

  removeClick (props) {
    this.props.removeCompare(this.props.location)
    this.toggleStateInactive()
  }

  buildCards (props) {
    if(this.props.forCompare === true){
      return(
      <div>
        <div className="top-of-card">
          <h3 className="district">{this.props.location}</h3>
          <button className="compare-btn" onClick={this.removeClick}>Remove
          </button>
        </div>
        <ul className="list">
          <List data={this.props.data}/>
        </ul>
      </div>)
  } else {
    return(
      <div>
      <div className="top-of-card">
        <h3 className="district">{this.props.location}</h3>
        <button className={this.state.toggleStateActive ? "compare-btn-off" : "compare-btn"} onClick={this.clickHandler}>Compare
        </button>
      </div>
      <ul className="list">
        <List data={this.props.data} />
      </ul>
    </div>
  )}

  }

render(){
  return (

    <div className="card">
      {this.buildCards()}
    </div>
  )
}
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.number).isRequired,
  compare: PropTypes.func.isRequired
 }



export default Card;
