import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import ReviewsCard from '../ReviewCard/ReviewCard';
import ProfileCard from '../ProfileCard';

import './UserDisplay.css';

import { fetchUserGigs } from '../../store/gigs';

function UserDisplay() {
    const dispatch = useDispatch();
    const sessionUserId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(fetchUserGigs(sessionUserId));
    }, [dispatch, sessionUserId])

    return (
        <>
            <div className="main-wrapper">

                <div className="card-and-reviews">
                    <ProfileCard />
                    <ReviewsCard />
                </div>
                <h1 style={{ fontSize: 'xxx-large' }}>Hello</h1>
                <hr/>
            </div>
        </>
    )
}

export default UserDisplay;
