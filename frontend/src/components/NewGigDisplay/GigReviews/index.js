import React, { useState } from 'react'
import './GigReviewsStyles.css'
import ShowReview from '../../GigShow/GigShowcase/ShowReview';
import CreateReview from '../../CreateReview';

function GigReviews({ reviews, gig }) {
    const [reviewsList, setReviewsList] = useState(reviews)

    // if (!gig) {
    //     return <div>Loading...</div>;
    // }

    console.log(reviews)
    console.log(gig)

    return (
        <div>
            <h1>Gig Reviews</h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <p>Username: {review.reviewer.username}</p>
                    <p>Review: {review.body}</p>
                </div>
            ))}
        </div>
    )
}

export default GigReviews;
