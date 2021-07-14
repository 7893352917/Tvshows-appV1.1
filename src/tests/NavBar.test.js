import NavBar from '../components/NavBar'
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("renders NavBar  Component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<NavBar />);
  });

  it('should have an div field', () => {
    expect(component.find('div').length).toEqual(2);
  });

  it('should not have three div fields', () => {
    expect(component.find('div').length).not.toEqual(3);
  });
});