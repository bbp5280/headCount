import React, { Component } from 'react';
import DistrictRepository from './helper';
import CardContainer from './CardContainer/CardContainer';
import kinderData from './../data/kindergartners_in_full_day_program.js';
import Controls from './Controls/Controls';
import CompareContainer from './CompareContainer/CompareContainer';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './index.css';
import ScrollBtn from './ScrollBtn/ScrollBtn';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      compareArray: [],
      comparisonData: {},
    };

    this.districts = new DistrictRepository(kinderData);
    this.handleSearch = this.handleSearch.bind(this);
    this.compareDistricts = this.compareDistricts.bind(this);
    this.removeCompare = this.removeCompare.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: this.districts.findAllMatches()
    });
  }

  handleSearch(event) {
    const inputValue = event.target.value
    const updatedValue = this.districts.findAllMatches(inputValue)
    this.setState({
      data: updatedValue
    });
  }

  compareDistricts(district) {
    if (this.state.compareArray.length === 0) {
      const updatedCompareArray = [...this.state.compareArray, district];
      this.setState({compareArray: updatedCompareArray});
    }

    if (this.state.compareArray.length === 1) {
      const updatedCompareArray = [...this.state.compareArray, district];
      this.setState({compareArray: updatedCompareArray}, () => this.getData(this.state.compareArray));
      ;
    }

    if (this.state.compareArray.length === 2) {
      const updatedCompareArray = [district];
      this.setState({compareArray: updatedCompareArray});
    }

  }

  getData(compareArray) {
    console.log(compareArray );
    const comparison = this.districts.compareDistrictAverages(compareArray[0], compareArray[1]);
    console.log(comparison);
    this.setState({ comparisonData: comparison });
  }

  removeCompare(districtFind){
    const districtsNotToRemove = this.state.compareArray.filter(district => {
      district !== districtFind})
    this.setState({ compareArray: districtsNotToRemove })
  }


  renderCompareContainer() {
      if (this.state.compareArray.length === 2) {
        return <CompareContainer compareArray={this.state.compareArray}
                                 districts={this.districts}
                                 comparisonData={this.state.comparisonData}
                                 removeCompare={this.removeCompare}/>
      }
  }

  render() {
    const data = this.state;

    return (
      <div className="parent">
        <Header />
        <Controls handleSearch={this.handleSearch} />
        {this.renderCompareContainer()}

        <CardContainer {... data} compare={this.compareDistricts}
                                   />
        <ScrollBtn />
        <Footer />
      </div>
    );
  }
}

export default App;
