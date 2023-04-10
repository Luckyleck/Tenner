import React, { useState, useEffect } from "react";
import ShowReview from "../ShowReview";
import './ReviewCardStyles.css'

function ReviewsCard() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/api/reviews")
            .then((response) => response.json())
            .then((data) => setReviews(data.reviews));
    }, []);

    return (

        <div className="reviews-container">
            <h1>reviews for this seller</h1>
            <ShowReview reviews={reviews} />
        </div>
    );
}

export default ReviewsCard;