import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { fetchUserGigs } from '../../store/gigs'
import { fetchUser } from '../../store/users'

import ProfileCard from '../ProfileCard';
import GigCard from '../Splash/GigList/GigCard';
import ReviewCard from '../ReviewCard/ReviewCard';

import './ViewUserStyles.css'


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
    <div>
      <ProfileCard user={user} />
      <ReviewCard reviews={reviews} />
      {/* <img alt="profile">{photoUrl}</img> */}
      <hr/>
      {Object.values(gigs).map(gig => (
        <GigCard key={gig.id} gig={gig} />
      ))}


    </div>
  )
}

export default ViewUser;
