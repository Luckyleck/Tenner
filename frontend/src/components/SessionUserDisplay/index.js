import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateGig from './CreateGig';
import ReviewsCard from '../ReviewCard/ReviewCard';
import ProfileCard from '../ProfileCard';
import GigCard from '../GigList/GigCard';

import { fetchUserGigs, deleteGig } from '../../store/gigs';
import { removeUser } from '../../store/users';

import './SessionUserDisplay.css';

function SessionUserDisplay() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.session);
    const sessionUserId = useSelector((state) => state.session.user.id);
    const userGigs = useSelector((state) => state.gigs);
    const reviews = []
    

    useEffect(() => {
        dispatch(fetchUserGigs(sessionUserId));
        dispatch(removeUser());
    }, [dispatch, sessionUserId]);

    Object.values(userGigs).forEach((gig) => {
        if (gig.reviews && gig.reviews.length > 0) {
            reviews.push(...gig.reviews);
        }
    });

    function handleDeleteGig(gigId) {
        dispatch(deleteGig(gigId));
        dispatch(fetchUserGigs(sessionUserId));
    }
    
    console.log(reviews);

    return (
        <>
            <div className="main-wrapper">
                <div className="card-and-reviews">
                    <ProfileCard user={user} />
                    <ReviewsCard reviews={reviews}/>
                </div>
            </div>
            <hr />
            <div className="gig-list">
                <CreateGig />
                <hr/>
                <div>
                    {Object.values(userGigs).map((gig) => (
                        <div key={gig.id}>
                            <GigCard gig={gig} />
                            <button onClick={() => handleDeleteGig(gig.id)}>Delete Gig</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SessionUserDisplay;