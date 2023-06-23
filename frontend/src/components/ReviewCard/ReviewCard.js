import React, { useState, useEffect } from "react";
import ShowReview from "../GigShow/GigShowcase/ShowReview";
// import ShowReview from "../ShowReview";
import './ReviewCardStyles.css'

function ReviewCard({ reviews }) {
    const colors = ['#1dbf73', '#ff6b6b', '#feca57', '#48dbfb', '#ff9f43', '#6ab04c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    return (

        <div className="reviews-container">
            <h1>Reviews as seller</h1>
            <div className="gig-reviews">
                {reviews.map((review) => {
                    return <ShowReview key={review.id} review={review} />;
                })}
            </div>
        </div>

    );
}

export default ReviewCard;