import React, { Component } from 'react';
import DistrictRepository from './helper';
import CardContainer from './CardContainer/CardContainer';
import kinderData from './../data/kindergartners_in_full_day_program.js';
import Controls from './Controls/Controls';
import CompareContainer from './CompareContainer/CompareContainer';
import Header from './Header/Header';
import Footer from './Footer/Footer';
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
    this.setState({
      data: updatedValue
    });
  }

  compareDistricts(district) {
    if (this.state.compareArray.length < 2) {
      const updatedCompareArray = [...this.state.compareArray, district];
      this.setState({compareArray: updatedCompareArray});
    } if(this.state.compareArray.length === 2) {
      const updatedCompareArray = [district];
      this.setState({compareArray: updatedCompareArray});
    }
  }

  render() {
    const data = this.state;

    return (
      <div>
        <Header />
        <Controls handleSearch={this.handleSearch}/>
        <CompareContainer
          compareArray={this.state.compareArray}/>
        <CardContainer {... data} compare={this.compareDistricts}/>
        <Footer />
      </div>
    );
  }
}

export default App;
