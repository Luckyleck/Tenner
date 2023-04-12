import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGig } from '../../store/gigs';
import Navbar from '../Splash/Navbar';
import './GigShowStyles.css'
import GigShowcase from './GigShowcase/GigShowcase';
import PurchaseModal from './PurchaseModal';

function GigShow() {
    debugger
    const dispatch = useDispatch();
    const { gigId } = useParams();
    const gig = useSelector((state) => state.gigs[gigId]);
    let purchaseModal = useSelector((state) => state.modal.purchaseModal);
    const [reviews, setReviews] = useState([]);

    if (gig) purchaseModal = true

    useEffect(() => {
        dispatch(fetchGig(gigId));
    }, [dispatch, gigId]);

    async function fetchReviewsForGig(gig) {
        const reviewIds = gig.reviews;
        const reviews = [];

        for (const reviewId of reviewIds) {
            const response = await fetch(`/api/reviews/${reviewId}`);
            const data = await response.json();
            console.log(data) // Already coming back as object
            reviews.push(data);
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

    console.log(reviews)

    return (
        <div className="all-page">
            <div className="header">
                <Navbar />
            </div>
            <div className='gig-show-main-content'>
                <div className='gig-showcase'>
                    <GigShowcase gig={gig} reviews={reviews} />
                </div>
                <div className='purchase-modal'>
                    {purchaseModal && <PurchaseModal price={gig.price}/>}
                </div>
            </div>
        </div>
    );
}

export default GigShow;