import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGig } from '../../store/gigs';
import Navbar from '../Splash/Navbar';
import './GigShowStyles.css'
import GigShowcase from './GigShowcase/GigShowcase';

function GigShow() {
    const dispatch = useDispatch();
    const { gigId } = useParams();
    const gig = useSelector((state) => state.gigs[gigId]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        dispatch(fetchGig(gigId));
    }, [dispatch, gigId]);

    async function fetchReviewsForGig(gig) {
        const reviewIds = gig.reviews;
        const reviews = [];

        for (const reviewId of reviewIds) {
            const response = await fetch(`/api/reviews/${reviewId}`);
            const data = await response.json();
            reviews.push(data.review);
        }

        return reviews;
    }

    useEffect(() => {
        async function fetchData() {
            const reviewsData = await fetchReviewsForGig(gig);
            setReviews(reviewsData);
        }

        fetchData();
    }, [gig]);

    if (!gig) {
        return <div></div>;
    }

    return (
        <div className="all-page">
            <div className="header">
                <Navbar />
            </div>
            <div className='main-content'>
                <GigShowcase gig={gig} reviews={reviews} />
                {/* <GigReview review={review}/> */}
            </div>
        </div>
    );
}

export default GigShow;