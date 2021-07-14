import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ item  }) => {
    const { image , rating, id, name , genres } = item;
    return (
        <Link to={`/singleshow/${id}`} className="listitem">
            <img src={image ? image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt={name} />
            <div className="listitem__info">
                <div className="info__name"> <strong> {name} </strong></div>
                <div className="info__rating">{rating?.average ? rating.average : "No Rating"}</div>
                <div> {genres.map(genre => {
                    return <p key={genre} className="itemlist__genre">{genre}</p>})}</div> 
            </div>
        </Link>
 )
}

export default ItemList;

