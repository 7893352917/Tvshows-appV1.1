import SearchBar from '../components/SearchBar';
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from 'enzyme';
import { render } from '@testing-library/react';

configure({ adapter: new Adapter() });
const mockedEvent = { preventDefault: jest.fn() };
const fakeUser = {
    data: [{
        "name": "Under the Dome",
        "id": 1,
        "genres": ["Drama", "Science-Fiction", "Thriller"],
        "rating": { "average": 6.6 },
        "image": { "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" },
        "premiered": "2013-06-24",
        "status": "Ended",
        "officialSite": "http://www.cbs.com/shows/under-the-dome/",
        "network": { "id": 2, "name": "CBS", "country": { "name": "United States", "code": "US", "timezone": "America/New_York" } }
    }]
};

jest.mock('../service/TvshowsApi', () => ({
    getAllShows: jest.fn((a) => Promise.resolve(fakeUser)),
    getTvShows: jest.fn((a) => Promise.resolve(fakeUser))
}));

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (show) => [show, jest.fn()],
}));

describe("Search bar Component", () => {
    const component = shallow(<SearchBar />);
    render(<SearchBar />);
    it('should have an form field', () => {
        expect(component.find('form').length).toEqual(1);
    });

    it('should not have two form fields', () => {
        expect(component.find('form').length).not.toEqual(2);
    });

    it('should handle the click event', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        const submitButton = component.find('button').simulate('click', mockedEvent);
        expect(submitButton).toBeTruthy();
    });

    it('should handle the input type', () => {
        const input = component.find('input').simulate('change', { target: { value: 'war' } });
        component.find('button').simulate('click', mockedEvent);
        expect(input).toBeTruthy();
    });

});