import React from 'react';
import CompareContainer from './CompareContainer';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';



describe('COMPARE CONTAINER', () => {

  it('should match the CompareContainer snapshot', () => {
    const districts = new DistrictRepository(kinderData)
    const mkFun = jest.fn();
    const wrapper = shallow(<CompareContainer compareArray = {['COLORADO', 'ACADEMY 20']}
                                              districts = { districts }
                                              comparisonData = {{'ACADEMY 20': 0.407,
                                                                  COLORADO: 0.53,
                                                                  compared: 0.768}}
                                              removeCompare = {mkFun}/>);

    expect(wrapper).toMatchSnapshot();
  });


});
