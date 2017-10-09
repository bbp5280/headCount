import React from 'react';
import ScrollBtn from './ScrollBtn';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('SCROLL BUTTON', () => {

  it('should appear on DOM', () => {
    const scrollBtn = shallow(<ScrollBtn />);
    expect(scrollBtn.length).toEqual(1);
  });

  it('should be stateful', () => {
    const scrollBtn = mount(<ScrollBtn />);

    expect(scrollBtn.state('intervalID')).toEqual(0);
  });



});
