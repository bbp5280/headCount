import React, { Component } from 'react';
import DistrictRepository from './helper';
import CardContainer from './CardContainer/CardContainer';
import kinderData from './../data/kindergartners_in_full_day_program.js';
import Controls from './Controls/Controls';
import CompareContainer from './CompareContainer/CompareContainer';
import Header from './Header/Header';
import './index.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      compareArray: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.compareDistricts = this.compareDistricts.bind(this);  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData)
    this.setState({
      data: district.findAllMatches()
    });
  }

  handleSearch(event) {
    const district = new DistrictRepository(kinderData)
    const inputValue = event.target.value
    const updatedValue = district.findAllMatches(inputValue)
    console.log(this.state);
    this.setState({
      data: updatedValue
    });
  }

  compareDistricts(district) {
    if (this.state.compareArray.length < 2) {
      const updatedCompareArray = [...this.state.compareArray, district];
      this.setState({compareArray: updatedCompareArray});
    }
  }

  render() {
    const data = this.state;

    return (
      <div>
        <Header />
        <CompareContainer
          compareArray={this.state.compareArray}/>
        <Controls handleSearch={this.handleSearch}/>
        <CardContainer {... data} compare={this.compareDistricts}/>
      </div>
    );
  }
}

export default App;
