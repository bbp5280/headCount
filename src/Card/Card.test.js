import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('CARD', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<Card location={'COLORADO'}
                              allData={{2004: 0.24}}
                              key={'COLORADO'}
                              compare={mkFun}
                              />);

it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
