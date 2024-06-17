import React from 'react';
import './Review.css';

const Review = ({ name, rating, comment }) => {
    return (
        <div className="review">
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Review;