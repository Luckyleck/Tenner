import React from 'react';
import ProfileCard from '../ProfileCard';
import ReviewsCard from '../ReviewCard/ReviewCard';
import './UserDisplay.css';

function Profile() {
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
            </div>
        </>
    )
}

export default Profile;
