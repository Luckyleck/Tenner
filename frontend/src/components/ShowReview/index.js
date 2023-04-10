import React from 'react';
import './ShowReviewStyles.css';

function ShowReview ({reviews}) {
    return (
        <>
            {reviews.map((review) => (
                <div key={review.id} className="single-review">
                    <h1>{review.reviewer}</h1>
                    <p>{review.body}</p>
                    <p>{review.review_rating}</p>
                    <p>{review.communication_rating}</p>
                    <p>{review.recommend_rating}</p>
                    <p>{review.service_rating}</p>
                </div>
            ))}
        </>
    )
}

export default ShowReview;