import React, { Component } from 'react';
import arrowIcon from '../../assets/scroll-up-arrow.svg';

class ScrollBtn extends Component {
  constructor() {
    super();
    this.state = {
      intervalID: 0
    };

  }

  render() {
    return (
      <button className="scroll-top">
          <img src={arrowIcon}/>
      </button>
    )
  }

}

export default ScrollBtn;
