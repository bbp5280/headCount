import React, { Component } from 'react';
import arrowIcon from '../../assets/scroll-up-arrow.svg';

class ScrollBtn extends Component {
  constructor() {
    super();
    this.state = {
      intervalID: 0
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button className="scroll-top" onClick={this.scrollToTop}>
          <img src={arrowIcon} />
      </button>
    )
  }

}

export default ScrollBtn;
