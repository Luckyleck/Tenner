import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateGig from './CreateGig';
import ReviewCard from '../ReviewCard/ReviewCard';
import ProfileCard from '../ProfileCard';
import GigCard from '../Splash/GigList/GigCard';

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

    return (
        <div className="main-wrapper">
            <div className="profileCard">
                <ProfileCard user={user} />
            </div>
            <div className="reviews-and-gigs">
                <div className="user-page-reviews">
                    <ReviewCard reviews={reviews} />
                </div>
                <br />

                <h1 id="your-gigs">Your gigs</h1>
                <div className="create-gig-session-profile">
                    <CreateGig />
                </div>
                <div className="gig-list-user">
                    {Object.values(userGigs).map((gig) => (
                        <div key={gig.id}>
                            <GigCard gig={gig}/>
                            <button onClick={() => handleDeleteGig(gig.id)}>Delete Gig</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SessionUserDisplay;

