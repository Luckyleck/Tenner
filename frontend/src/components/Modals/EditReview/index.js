import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './EditReviewStyles.css'
import * as modalActions from '../../../store/modals'
import { updateReview } from '../../../store/reviews'


function EditReview({ gig, review }) {
    const dispatch = useDispatch();
    const [body, setBody] = useState(review.body);
    const [error, setError] = useState('');

    function overlayClick() {
        dispatch(modalActions.hideEditReview())
    }

    function handleBodyChange(e) {
        setBody(e.target.value)
    }

    function handleSave() {
        if (body.trim() === '') {
          setError('Please write something');
        } else {
          const updatedReview = {
            ...review,
            body,
          };
          dispatch(updateReview(updatedReview));
          dispatch(modalActions.hideEditReview());
        }
      }

    return (
        <>
            <div className="edit-modal-overlay" onClick={overlayClick}></div>
            <div className="edit-review-modal-container">

                <h1 className="edit-review-modal-header">edit your review</h1>
                <textarea
                    className='edit-review-modal-textarea'
                    type='text'
                    name='body'
                    value={body}
                    placeholder={'Type here...'}
                    onChange={handleBodyChange}
                />
                {error && <p className="edit-review-errors">{error}</p>}
                <button className='edit-review-modal-button' onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default EditReview;