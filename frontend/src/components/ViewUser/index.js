import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { fetchUserGigs } from '../../store/gigs'
import { fetchUser } from '../../store/users'


function ViewUser() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUser(userId))
    dispatch(fetchUserGigs(userId))
  }, [dispatch, userId])

  const { fname, lname, email, photoUrl } = useSelector(state => state.users)
  const gigs = useSelector(state => state.gigs)

  return (
    <div>
      <h1>This is the view User display</h1>
      <h1>{fname} {lname}</h1>
      <h1>{email}</h1>
      <img alt="profile">{photoUrl}</img>
      <hr/>
      {Object.values(gigs).map(gig => (
        <div key={gig.id}>
          <h2>{gig.title}</h2>
          <p>{gig.description}</p>
          <p>Seller ID: {gig.seller_id}</p>
          <hr />
        </div>
      ))}


    </div>
  )
}

export default ViewUser;
