import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { fetchUserGigs } from '../../store/gigs'
import { fetchUser } from '../../store/users'

import ProfileCard from '../ProfileCard';
import GigCard from '../Splash/GigList/GigCard';
import ReviewCard from '../ReviewCard/ReviewCard';

//styles in SessionUserDisplay.css


function ViewUser() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const reviews = []

  useEffect(() => {
    dispatch(fetchUser(userId))
    dispatch(fetchUserGigs(userId))
  }, [dispatch, userId])

  const { user } = useSelector(state => state.users);
  const gigs = useSelector(state => state.gigs)

  Object.values(gigs).forEach((gig) => {
    if (gig.reviews && gig.reviews.length > 0) {
      reviews.push(...gig.reviews);
    }
  })
  if (!user) {
    return null
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
        <h1 id="your-gigs">{user.username}'s gigs</h1>
        <div className="gig-list-user">
            {Object.values(gigs).map((gig) => (
              <div key={gig.id}>
                <GigCard gig={gig} />
              </div>
            ))}
        </div>
      </div>
    </div >
  );
}

export default ViewUser;
