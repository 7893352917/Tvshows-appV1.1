import axios from 'axios';
import { getAllShows, getTvShows, getSingleShow } from '../service/TvshowsApi';

jest.mock('axios');

test('should fetch all Tv shows api ', () => {
  const showName = [{ name: 'war' }];
  const response = { data: showName };
  axios.get.mockResolvedValue(response);
  getAllShows().then(value => expect(value).toEqual(response));
});


test('should have search related shows', () => {
  const search = [{ name: 'war' }];
  const response = { data: search };
  axios.get.mockResolvedValue(response);
  getTvShows().then(value => expect(value).toEqual(response));
});

test('should have single show details ', () => {
  const clickShow = [{ name: 'war' }];
  const response = { data: clickShow };
  axios.get.mockResolvedValue(response);
  getSingleShow().then(value => expect(value).toEqual(response));
});