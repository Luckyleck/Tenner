import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Splash/Navbar'
// import '../Splash/Navbar/index.css';
import './ProfileStyles.css'


function Profile () {
    return (
        <>
            <div className="main-wrapper">
                <div className="navbar">
                <Navbar />
                <h1>"This is the profile"</h1>
                </div>
            </div>
        </>
    )
}

export default Profile;
