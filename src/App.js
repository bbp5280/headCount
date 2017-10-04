import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import CardContainer from './CardContainer/CardContainer';
import kinderData from './../data/kindergartners_in_full_day_program.js';


class App extends Component {

  constructor (){
    super()
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData)
    this.setState({
      data: district.findAllMatches()
    });
  }

  render() {
    const data = this.state;

    return (

      <div>
        <CardContainer {... data} />
      </div>
    );
  }
}

export default App;
