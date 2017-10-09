import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('CONTROLS', () => {
  let wrapper = shallow(<Controls />);

  it('should have a controls container', () => {
    let searchContainer = wrapper.find('.controls');

    expect(searchContainer.length).toEqual(1);
  });

  it('should have an input field', () => {
    let input = wrapper.find('input');

    expect(input.length).toEqual(1);
  });

});
