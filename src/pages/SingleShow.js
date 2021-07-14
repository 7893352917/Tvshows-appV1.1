import React, { useEffect, useState } from 'react';
import { getSingleShow } from '../service/TvshowsApi';

const SingleShow = ({ match }) => {
    const [show, setShow] = useState([])
    useEffect(() => {
        getSingleShow(match.params.id).then((res) => {
            setShow(res.data);
        })
    }, [])

    return (
        <div className="singlepage">
            <img src={show.image ? show.image.medium : "No image"} alt={show.name}/>
            <div className="singlepage__info">
                <h1>{show !== null && show.name}</h1>
                <h3>Rating: {show.rating?.average ? show.rating.average : "No rating"}</h3>
                <h3>{show.genres && show.genres.map(genre => {
                    return <span key={genre} className="singlepage__genre">{genre}</span>
                })}</h3>
                <p>Language: {show.language}</p>
                <p>Status: {show.status && show.status}</p>
                <p>Premiered: {show.premiered ? show.premiered : "N/A"}</p>
                <p>Country: {show.network && show.network.country ? show.network.country.name : "N/A"}</p>
                <p>Official Site:  {show.officialSite ? show.officialSite : "N/A"}</p>
                <p>{show.summary && show.summary.replace(/(<([^>]+)>)/gi, "")}</p>
            </div>
        </div>
    )
}

export default SingleShow;