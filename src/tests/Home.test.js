import Home from '../pages/Home'
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() });

describe("Home Component", () => {
  const component = shallow(<Home />);
  it('should have an div field', () => {
    expect(component.find('div').length).toEqual(1);
  });
});