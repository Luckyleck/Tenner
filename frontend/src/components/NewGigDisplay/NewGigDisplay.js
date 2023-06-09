import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGig } from '../../store/gigs';

import GigInfo from './GigInfo';
import GigReviews from './GigReviews';
import PurchaseBox from './PurchaseBox';

/* 

    Gigs slice
    {
        gigs:
            gig: ...selectedGig
    } 

*/


function NewGigDisplay() {

    const dispatch = useDispatch();
    const { gigId } = useParams();
    const { gig } = useSelector(state => state.gigs)

    useEffect(() => {
        dispatch(fetchGig(gigId));
    }, [dispatch, gigId]);

    const dependencies = [
        gig,
        gig?.reviews,
        gig?.base_price
    ]

    if ((dependencies.some(dependency => !dependency))) {
        return <div>Loading...</div>;
    };

    return (
        <div>
            <GigInfo gig={gig} />
            <PurchaseBox price={gig?.base_price} />
            <GigReviews reviews={gig.reviews} gig={gig} />
        </div>
    )
}

export default NewGigDisplay;
