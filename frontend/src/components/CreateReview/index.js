import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './CreateReviewStyles.css'
import * as modalActions from '../../store/modals'

function CreateReview() {
    const dispatch = useDispatch();
    const [body, setBody] = useState

    function overlayClick() {
        dispatch(modalActions.hideCreateReview())
    }

    function handleBodyChange (e) {
        setBody(e.target.value)
    }

    function handleSave() {
        console.log('review saved')
    }

    return (
        <>
            <div className="modal-overlay" onClick={overlayClick}></div>
            <div className="modal-container">

                <h1 className="modal-header">Leave a review</h1>
                <input
                    className='modal-input'
                    type='text'
                    name='fname'
                    value={body}
                    placeholder={'Type here'}
                    onChange={handleBodyChange}
                />
                <button className='modal-button' onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default CreateReview;