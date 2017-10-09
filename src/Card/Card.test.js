import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('CARD', () => {
  let wrapper = shallow(<Card />);

  it('should have a container', () => {
    let compareDiv = wrapper.find('.compare-card');

    expect(compareDiv.length).toEqual(1);
  });

});
