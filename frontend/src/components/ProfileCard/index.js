import React from "react";
import './ProfileCardStyles.css'
import { useSelector } from 'react-redux'



function ProfileCard() {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="profile-info-container">
            <div className="profile-img">
                <h1>{sessionUser.username[0]}</h1>
            </div>
            <div className="profile-info-text">
                <h1>{sessionUser.fname} {sessionUser.lname}</h1>
                

            </div>

        </div>
    )
}

export default ProfileCard