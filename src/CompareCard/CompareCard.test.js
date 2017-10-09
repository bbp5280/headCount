import React from 'react';
import ReactDOM from 'react-dom';
import CompareCard from './CompareCard';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('COMPARE CARD', () => {
  let wrapper = shallow(<CompareCard />);

  it('should have a container', () => {
    let compareDiv = wrapper.find('.compare-card');

    expect(compareDiv.length).toEqual(1);
  });

});
