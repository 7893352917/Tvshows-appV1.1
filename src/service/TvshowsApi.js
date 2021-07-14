import axios from 'axios';

const URL = "http://api.tvmaze.com";

export const getTvShows = (name) => {
    return axios.get(`${URL}/search/shows?q=${name}`)
}

export const getAllShows = () => {
    return axios.get(`${URL}/shows`)
}

export const getSingleShow = (id) => {
    return axios.get(`${URL}/shows/${id}`)
}