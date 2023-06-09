import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import GigReviews from '../GigReviews';

import * as modalActions from '../../../store/modals';

import './GigInfoStyles.css'

function GigInfo({ gig }) {

    return (
        <div>
            <h1>Gig Info</h1>
            <ul>
                <li>{gig.title}</li>
                <li>{gig.description}</li>
                <li>${gig.base_price}</li>
            </ul>
        </div>
    )
}

export default GigInfo
