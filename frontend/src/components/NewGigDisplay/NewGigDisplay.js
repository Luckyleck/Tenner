import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGig } from '../../store/gigs';

import GigInfo from './GigInfo';
import GigReviews from './GigReviews';
import PurchaseBox from './PurchaseBox';


function NewGigDisplay() {
    const dispatch = useDispatch();
    const { gigId } = useParams();
    const { gig } = useSelector(state => state.gigs)

    useEffect(() => {
        dispatch(fetchGig(gigId));
    }, [dispatch, gigId]);

    return (
        <div>
            <GigInfo gig={gig} />
            <PurchaseBox gig={gig} />
            <GigReviews gig={gig} />
        </div>
    )
}

export default NewGigDisplay;
