import React from 'react';
import CompareCard from './CompareCard';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('COMPARE CARD', () => {
  let wrapper = shallow(<CompareCard comparisonData = {{ 'ACADEMY 20': 0.407,
                                                        COLORADO: 0.53,
                                                        compared:0.768}}
                                     getAvg={{district1: 'ACADEMY 20',
                                              district1Average: 0.407,
                                              district2: 'COLORADO',
                                              district2Average: 0.768}}/>);

  it('should match the CompareCard snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
});

});
