import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Splash/Navbar';
import ProfileCard from '../ProfileCard';
import ReviewCard from '../ReviewCard/ReviewCard';

// import ReviewForm from '../Reviews/ReviewForm';
import './UserDisplay.css';

function Profile() {
    const sessionUser = useSelector(state => state.session.user)
    return (
        <>
            <div className="main-wrapper">

                <div className="header">
                    <Navbar />
                </div>

                <div className="card-and-reviews">
                    <ProfileCard />
                    <ReviewCard /> 
                </div>
            </div>
        </>
    )
}

export default Profile;


// /*
// {/* <div className="profile-card">
//                         <h1 className='profile-pic'>{sessionUser.username[0]}</h1>
//                         <h2>{sessionUser.username}</h2>
//                         <h2>{sessionUser.fname} {sessionUser.lname}</h2>
//                         <p>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                         </p>
//                         <div className="links">
//                             <a href="#">Linkedin</a>
//                             <a href="#">Github</a>
//                         </div>
//                     </div>
//                     <div className="review-card">
//                         <div className="row d-flex justify-content-between">
//                             {/* <div><ReviewForm /></div> */}
//                             </div>
//                         </div> 
// /*