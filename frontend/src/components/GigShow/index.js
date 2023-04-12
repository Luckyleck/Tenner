import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGig } from '../../store/gigs';
import Navbar from '../Splash/Navbar';
import './GigShowStyles.css'
import GigShowcase from './GigShowcase/GigShowcase';

function GigShow() {
    const { gigId } = useParams();
    const dispatch = useDispatch();
    const gig = useSelector((state) => state.gigs[gigId]);

    useEffect(() => {
        dispatch(fetchGig(gigId));
    }, [dispatch, gigId]);

    if (!gig) {
        return <div>Loading...</div>;
    }

    return (
        <div className="all-page">
            <div className="header">
                <Navbar />
            </div>
            <div className='main-content'>
                <GigShowcase gig={gig} />
                {/* <GigReview review={review}/> */}
            </div>
        </div>
    );
}

export default GigShow;