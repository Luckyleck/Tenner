import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './CreateReviewStyles.css'
import * as modalActions from '../../store/modals'
import { createReview } from '../../store/reviews';

function CreateReview({ gig, forceUpdate}) {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const sessionUser = useSelector(state => state.session.user);

    function overlayClick() {
        dispatch(modalActions.hideCreateReview())
    }

    function handleBodyChange(e) {
        setBody(e.target.value)
    }

    function handleSave() {
        if (body.trim() === '') {
            setError('Please write something')
        } else {
            const review = {
                body,
                reviewer_id: sessionUser.id,
                gig_id: gig.id
            }
            dispatch(createReview(review));
            dispatch(modalActions.hideCreateReview());
        }
    }

    return (
        <>
            <div className="modal-overlay" onClick={overlayClick}></div>
            <div className="review-modal-container">

                <h1 className="review-modal-header">Leave a review</h1>
                <textarea
                    className='review-modal-textarea'
                    type='text'
                    name='body'
                    value={body}
                    placeholder={'Type here...'}
                    onChange={handleBodyChange}
                />
                {error && <p className="review-errors">{error}</p>}
                <button className='review-modal-button' onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default CreateReview;