import React from 'react';
import './ShowReviewStyles.css'
import { useSelector, useDispatch } from 'react-redux';
import EditReview from '../../Modals/EditReview';
import * as modalActions from '../../../store/modals'
import { deleteReview } from '../../../store/reviews';

function ShowReview({ review, gig }) {
    const dispatch = useDispatch();
    const colors = ['#1dbf73', '#ff6b6b', '#feca57', '#48dbfb', '#ff9f43', '#6ab04c'];
    const editReviewModal = useSelector(state => state.modal.editReviewModal);
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const sessionUser = useSelector(state => state.session.user)

    function handleEditReview() {
        dispatch(modalActions.showEditReview())
    }

    function handleDeleteReview() {
        dispatch(deleteReview(review.id));
    }
    
    return (
        
        <>
            <div className="review-container">
                <div className="reviewer-profile-bubble" style={{ backgroundColor: randomColor }}>
                    <h1>{review.reviewer.username[0]}</h1>
                </div>
                <div className="review-content">
                    <h3>{review.reviewer.username}</h3>
                    <p>{review.body}</p>
                    {review.reviewer?.id === sessionUser.id && (
                        <div className="edit-delete-review">
                            <p id="edit-review-button" onClick={handleEditReview}>Edit Review</p>
                            <p id="delete-review-button" onClick={handleDeleteReview}>Delete Review</p>
                        </div>
                    )}
                </div>
            </div>
            {editReviewModal && <EditReview gig={gig} review={review} />}
            <hr id="review-showcase-hr" />
        </>
    )
}

export default ShowReview;