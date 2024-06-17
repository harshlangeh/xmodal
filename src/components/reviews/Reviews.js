// Reviews.js
import React from 'react';
import './Review.css';
import { FaStar, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Reviews = () => {
    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            socialMedia: {
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com"
            }
        },
        {
            name: "Jane Smith",
            rating: 4,
            comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            socialMedia: {
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com"
            }
        },
    
      
        {
            name: "Alice Johnson",
            rating: 3,
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            socialMedia: {
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com",
                instagram: "https://instagram.com"
            }
        }
    ];

    return (
        <div className="reviews">
            {reviews.map((review, index) => (
                <div key={index} className="review">
                    <div className="review-header">
                        <img src={`person${index + 1}.jpg`} alt="Person" className="person-icon" />
                        <div className="review-details">
                            <h3>{review.name}</h3>
                            <div className="rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} className="star" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="review-content">
                        <p>{review.comment}</p>
                    </div>
                    <div className="social-links">
                        <a href={review.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href={review.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href={review.socialMedia.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
