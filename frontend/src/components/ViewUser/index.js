import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { fetchUserGigs } from '../../store/gigs'
import { fetchUser } from '../../store/users'

import ProfileCard from '../ProfileCard';
import GigCard from '../GigList/GigCard';

import './ViewUserStyles.css'


function ViewUser() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUser(userId))
    dispatch(fetchUserGigs(userId))
  }, [dispatch, userId])

  const { user } = useSelector(state => state.users);
  const gigs = useSelector(state => state.gigs)

  if (!user) {
    return null
  }

  return (
    <div>
      <ProfileCard user={user} />
      {/* <img alt="profile">{photoUrl}</img> */}
      <hr/>
      {Object.values(gigs).map(gig => (
        <GigCard key={gig.id} gig={gig} />
      ))}


    </div>
  )
}

export default ViewUser;
