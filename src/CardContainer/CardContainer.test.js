import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('CARD CONTAINER', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<CardContainer {... {location:'COLORADO',
                                              allData:[{2004: 0.24}],
                                              key:'COLORADO',
                                              compare:mkFun}}/>);

  it('should match the CardContainer snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
