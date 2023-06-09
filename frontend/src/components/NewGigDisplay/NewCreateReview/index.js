import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReview } from '../../../store/reviews';

import * as modalActions from '../../../store/modals';

import './NewCreateReviewStyles.css'

function NewCreateReview({ gig }) {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    // const showSwitch = useSelector(state => state.modal.createReviewModal)
    const [showCreate, setShowCreate] = useState(false);

    function overlayClick() {
        // dispatch(modalActions.hideCreateReview())
        setShowCreate(!showCreate)
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
            // dispatch(modalActions.hideCreateReview());
            setShowCreate(!showCreate)
        }
    }

    console.log(showCreate)

    if (showCreate === false) {
        return (
            <button onClick={() => setShowCreate(!showCreate)}>Create Review</button>
        )
    } else {
        return (
            <>
                <button onClick={() => setShowCreate(!showCreate)}>Create Review</button>
                <div className="modal-overlay" onClick={overlayClick}></div>
                <div className="review-modal-container">

                    <h1 className="review-modal-header">leave a review</h1>
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
}

export default NewCreateReview;

