import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme';
import SingleShow from '../pages/SingleShow';
import { render } from '@testing-library/react';
configure({ adapter: new Adapter() });
const fakeUser = {
  data: {
    "name": "Under the Dome",
    "id": 1,
    "genres": ["Drama", "Science-Fiction", "Thriller"],
    "rating": { "average": 6.6 },
    "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" },
    "premiered": "2013-06-24",
    "status": "Ended",
    "officialSite": "http://www.cbs.com/shows/under-the-dome/",
    "network": { "id": 2, "name": "CBS", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }
  }
};

jest.mock('../service/TvshowsApi', () => ({
  getSingleShow: jest.fn((a) => Promise.resolve(fakeUser)),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (show) => [show, jest.fn()],
}));

describe("SingleShow Component", () => {
  const match = {
    params: { id: 2 }
  }
  let component = shallow((<SingleShow />));
  render(<SingleShow match={match} />);

  it('should have an div field', () => {
    expect(component.find('div').length).toEqual(2);
  });

  it('should have a p tag', () => {
    expect(component.find('p').length).toEqual(6);
  });

  it('should match the snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });
});