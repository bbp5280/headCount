import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('HEADER', () => {
  let wrapper = shallow(<Header />);

  it('should have a header container', () => {
    let header = wrapper.find('.header');

    expect(header.length).toEqual(1);
  });

  it('should match the Header snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
