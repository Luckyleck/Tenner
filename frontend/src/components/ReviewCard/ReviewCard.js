import React, { useState, useEffect } from "react";

function ReviewCard() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/api/reviews")
            .then((response) => response.json())
            .then((data) => setReviews(data.reviews));
    }, []);

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.id}>
                    <p>{review.body}</p>
                    <p>{review.review_rating}</p>
                    <p>{review.communication_rating}</p>
                    <p>{review.recommend_rating}</p>
                    <p>{review.service_rating}</p>
                </div>
            ))}
        </div>
    );
}

export default ReviewCard;