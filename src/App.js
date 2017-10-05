import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import CardContainer from './CardContainer/CardContainer';
import kinderData from './../data/kindergartners_in_full_day_program.js';
import Controls from './Controls/Controls'

class App extends Component {

  constructor (){
    super()
    this.state = {
      data: [],
    };
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData)
    this.setState({
      data: district.findAllMatches()
    });
  }

  handleSearch(event){
    const district = new DistrictRepository(kinderData)
    const inputValue = event.target.value
    const updatedValue = district.findAllMatches(inputValue)
    console.log(this.state);
    this.setState({
    data: updatedValue
  }, ()=>{
    console.log('callback');
  });
  console.log(this.state);
  }

  render() {
    const data = this.state;

    return (

      <div>
        <Controls handleSearch={this.handleSearch}/>
        <CardContainer {... data} />
      </div>
    );
  }
}

export default App;
