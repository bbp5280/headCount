import React, { Component } from 'react';
import DistrictRepository from './helper';
import CardContainer from './CardContainer/CardContainer';
import kinderData from './../data/kindergartners_in_full_day_program.js';
import Controls from './Controls/Controls';
import CompareContainer from './CompareContainer/CompareContainer';
import Header from './Header/Header';
import './index.css';
import ScrollBtn from './ScrollBtn/ScrollBtn';

class App extends Component {

  constructor() {
    super();
    this.state = {
      allData: [],
      compareArray: [],
      comparisonData: {}
    };

    this.districts = new DistrictRepository(kinderData);
    this.handleSearch = this.handleSearch.bind(this);
    this.compareDistricts = this.compareDistricts.bind(this);
    this.removeCompare = this.removeCompare.bind(this);
  }

  componentDidMount() {
    this.setState({
      allData: this.districts.findAllMatches()
    });
  }

  handleSearch(event) {
    const inputValue = event.target.value;
    const updatedValue = this.districts.findAllMatches(inputValue);
    this.setState({
      allData: updatedValue
    });
  }

  compareDistricts(district) {
    if (this.state.compareArray.length === 0) {
      const updatedCompareArray = [...this.state.compareArray, district];
      this.setState({
        compareArray: updatedCompareArray
      });
    }

    if (this.state.compareArray.length === 1) {
      const updatedCompareArray = [...this.state.compareArray, district];
      this.setState({
        compareArray: updatedCompareArray
      }, () => this.getData(this.state.compareArray));
    }

    if (this.state.compareArray.length === 2) {
      const updatedCompareArray = [district];
      this.setState({
        compareArray: updatedCompareArray
      });
    }

  }

  getData(compareArray) {
    const comparison =
    this.districts.compareDistrictAverages(compareArray[0], compareArray[1]);
    this.setState({
      comparisonData: comparison
    });
  }

  removeCompare(districtFind){
    const districtsNotToRemove = this.state.compareArray.filter(district => {
      district !== districtFind;
    });
    this.setState({
      compareArray: districtsNotToRemove
    });
  }


  renderCompareContainer() {
    if (this.state.compareArray.length === 2) {
      return <CompareContainer
        compareArray={this.state.compareArray}
        districts={this.districts}
        comparisonData={this.state.comparisonData}
        removeCompare={this.removeCompare} />;
    }
  }

  render() {
    const allData = this.state;

    return (
      <div className="parent">
        <Header />
        <Controls handleSearch={this.handleSearch} />
        {this.renderCompareContainer()}
        <CardContainer {... allData}
          compare={this.compareDistricts}
          compareArray={this.state.compareArray}
        />
        <ScrollBtn
          scrollStepInPx="50"
          delayInMs="10" />
      </div>
    );
  }
}

export default App;
