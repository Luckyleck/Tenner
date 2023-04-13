import React from 'react';
import './ShowReviewsStyles.css'

function ShowReview({ review }) {
    return (
        <>
            <h1>reviews</h1>
            <h1>{review.body}</h1>
            <h1>{review.reviewer.username}</h1>
        </>
    )
}

export default ShowReview;