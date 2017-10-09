import React from 'react';
import List from './List';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../../test/setup.js';

describe('LIST', () => {
  let wrapper = shallow(<List data={{2004: 0.24}} />);

  it('should match the List snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

});
