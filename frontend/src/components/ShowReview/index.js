import React, { useState, useEffect } from 'react';
import './ShowReviewStyles.css';

function ShowReview({ reviews }) {
    const [reviewerIds, setReviewerIds] = useState([]);
    const [reviewers, setReviewers] = useState([])

    useEffect(() => {
        const ids = reviews.map(review => review.reviewer_id);
        setReviewerIds(ids);
    }, [reviews]);

    console.log(reviewerIds)

    useEffect(() => {
        async function getUsers() {
            const promises = reviewerIds.map(async (id) => {
                const response = await fetch(`/api/users/${id}`);
                const data = await response.json();
                return data;
            });
            const results = await Promise.all(promises);
            setReviewers(results);
        }
        getUsers();
    }, [reviewerIds]);

    console.log(reviewers);
    

    return (
        <>
            {reviews.map((review) => (
                <div key={review.id} className="single-review">
                    <h1>The Reviewer Username</h1>
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