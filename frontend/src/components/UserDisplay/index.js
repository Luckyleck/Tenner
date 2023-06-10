import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import ReviewsCard from '../ReviewCard/ReviewCard';
import ProfileCard from '../ProfileCard';

import './UserDisplay.css';

import { fetchUserGigs } from '../../store/gigs';

function UserDisplay() {
    const dispatch = useDispatch();
    const userGigs = useSelector(state => state.gigs);

    useEffect(() => {
        dispatch(fetchUserGigs);
    }, [])

    return (
        <>
            <div className="main-wrapper">

                {/* <div className="user-display-header">
                    <Navbar />
                </div> */}

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
