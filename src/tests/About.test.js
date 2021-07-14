import About from '../pages/About';
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("renders About  Component", () => {
  const component = shallow(<About />);
  it('should have an div field', () => {
    expect(component.find('div').length).toEqual(2);
  });
});