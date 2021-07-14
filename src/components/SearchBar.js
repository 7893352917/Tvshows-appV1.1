import React, { useState, useEffect } from 'react';
//api
import { getTvShows, getAllShows } from '../service/TvshowsApi';

//Components
import ItemList from './ItemList';

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [shows, setShows] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const genres = [
        'All',
        'Drama',
        'Action',
        'Thriller',
        'Science-Fiction',
        'Crime',
        'Horror',
        'Romance',
        'Adventure',
        'Espionage',
        'Mystery',
        'Supernatural',
        'Fantasy',
        'Family',
        'Anime',
        'Comedy',
        'History',
        'Medical',
        'Legal',
        'Music',
        'Western',
        'War',
        'Sports']

    useEffect(() => {
        getAllShows().then((res) => {
            setShows(res.data)
        })
    }, [search])

    const onSearchHandler = (e) => {
        e.preventDefault();
        if (search === "") {
            alert("Please enter something");
        }
        else {
            getTvShows(search).then((res) => {
                const response = res.data.map((item) => item.show)
                setShows(response);
            })
        }
    };

    const filteredShows = () => {
        if (selectedGenre !== "All") {
            return shows.filter(show => show.genres.includes(selectedGenre));
        }
        return shows;
    }

    return (
        <div className="searchbar">
            <form className="searchbar__form">
                <input
                    type="text"
                    placeholder="Search for tv show"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn"
                    onClick={onSearchHandler}>
                    SEARCH
                </button>
                <strong> Filter Shows By Genre: </strong>
                <select onChange={(e) => setSelectedGenre(e.target.value)} className="dropdown">
                    {genres.map(genreSelected =>
                        <option value={genreSelected} key={genreSelected}> {genreSelected}</option>
                    )}
                </select>
            </form>
            <div className="home__list">
                {shows && filteredShows()
                    .sort((a, b) => b.rating.average - a.rating.average)
                    .map((item) => {
                        return (
                            <ItemList
                                item={item}
                                key={item.id}
                            />)
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;