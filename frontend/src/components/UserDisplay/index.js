import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import ReviewsCard from '../ReviewCard/ReviewCard';
import ProfileCard from '../ProfileCard';

import './UserDisplay.css';

import { fetchUserGigs, deleteGig } from '../../store/gigs';

function UserDisplay() {

    const dispatch = useDispatch();
    const sessionUserId = useSelector(state => state.session.user.id)
    const userGigs = useSelector(state => state.gigs)

    useEffect(() => {
        dispatch(fetchUserGigs(sessionUserId));
    }, [dispatch, sessionUserId])

    // possibly include userGigs in the useEffect

    function handleDeleteGig(gigId) {
        dispatch(deleteGig(gigId))
    }

    console.log(userGigs)

    return (
        <>
            <div className="main-wrapper">

                <div className="card-and-reviews">
                    <ProfileCard />
                    <ReviewsCard />
                </div>
            </div>
            <hr />
            <div className="gig-list">
            {Object.values(userGigs).map(gig => (
                <div key={gig.id}>
                    <h2>{gig.title}</h2>
                    <p>{gig.description}</p>
                    <p>Seller ID: {gig.seller_id}</p>
                    <button onClick={() => handleDeleteGig(gig.id)}>Delete Gig</button>
                    <hr />
                </div>
            ))}
            </div>
        </>
    )
}

export default UserDisplay;
