import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../test/setup.js';
import DistrictRepository from './helper';


describe('APP', () => {

  it('renders without crashing', () => {
    const newApp = shallow(<App />);

    expect(newApp.hasClass('parent')).toEqual(true);
  });

  it('has a state of compareArray', () => {
    const newApp = mount(<App />);

    expect(newApp.state('compareArray')).toEqual([]);
    const compareBtn = newApp.find('.compare-btn').first();
    compareBtn.simulate('click');
    expect(newApp.state('compareArray')).toEqual(['COLORADO']);
  });

  it('has a state of allData of 181 in length', () => {
    const newApp = mount(<App />);

    expect(newApp.state('allData').length).toEqual(181);
  });

  it('has a state of compareArray', () => {
    const newApp = mount(<App />);

    expect(newApp.state('comparisonData')).toEqual({});
    const compareBtn = newApp.find('.compare-btn').first();
    compareBtn.simulate('click');
    const compareBtn2 = newApp.find('.compare-btn').last();
    compareBtn2.simulate('click');

    expect(newApp.state('comparisonData')).toEqual({COLORADO: 0.53,
                                                    'YUMA SCHOOL DISTRICT 1': 0.909,
                                                    compared:0.583});
  });

  it('has a state of compareArray', () => {
    const newApp = shallow(<App />);

    expect(newApp).toMatchSnapshot();
  });


});
