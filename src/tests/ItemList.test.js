import ItemList from '../components/ItemList'
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() });
const mockedItem = {
  "name": "Under the Dome",
  "id": 1,
  "genres": ["Drama", "Science-Fiction", "Thriller"],
  "rating": { "average": 6.6 },
  "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" }
}
describe("Item List  Component", () => {
  let component;
  it('should have an div field', () => {
    component = shallow(<ItemList item={mockedItem} />);
    expect(component.find('div').length).toEqual(4);
  });

  it('should have an div field', () => {
    mockedItem.image = "";
    mockedItem.rating = "";
    component = shallow(<ItemList item={mockedItem} />);
    expect(component.find('div').length).toEqual(4);
  });
});