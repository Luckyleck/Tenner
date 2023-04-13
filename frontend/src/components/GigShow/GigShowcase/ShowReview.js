import React from 'react';
import './ShowReviewStyles.css'
import { useSelector } from 'react-redux';

function ShowReview({ review }) {
    const colors = ['#1dbf73', '#ff6b6b', '#feca57', '#48dbfb']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
        <div className="review-container">
            <div className="reviewer-profile-bubble" style={{ backgroundColor: randomColor }}>
                <h1>{review.reviewer.username[0]}</h1>
            </div>
            <div className="review-content">
                <h3>{review.reviewer.username}</h3>
                <p>{review.body}</p>
                {review.reviewer.id === sessionUser.id && (
                    <div className="edit-delete-review">
                        <button id="edit-review-button">Edit Review</button>
                        <button id="delete-review-button">Delete Review</button>
                    </div>
                )}
            </div>
        </div>
        <hr id="review-showcase-hr" />
        </>
    )
}

export default ShowReview;