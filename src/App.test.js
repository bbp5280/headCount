import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../test/setup.js';

describe('APP', () => {

  it('renders without crashing', () => {
    const newApp = shallow(<App />);

    expect(newApp.hasClass('parent')).toEqual(true);
  });

  it('is stateful', () => {
    const newApp = mount(<App />);

    expect(newApp.state('compareArray')).toEqual([]);
    const compareBtn = newApp.find('.compare-btn').first();
    compareBtn.simulate('click');
    expect(newApp.state('compareArray')).toEqual(['COLORADO']);
  });



});
