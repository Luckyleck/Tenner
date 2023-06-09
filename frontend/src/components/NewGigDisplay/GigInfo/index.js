import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import GigReviews from '../GigReviews';

import * as modalActions from '../../../store/modals';

import './GigInfoStyles.css'

function GigInfo({ gig }) {
    const dispatch = useDispatch();
    const createReviewModal = useSelector(state => state.modal.createReviewModal)

    return (
        <div>
            <h1>Gig Info</h1>
        </div>
    )
}

export default GigInfo
