import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import ShowReview from './ShowReview';
import CreateReview from '../../Modals/CreateReview';

import * as modalActions from '../../../store/modals';

import './GigShowcaseStyles.css'

function GigShowcase({ gig }) {
    const dispatch = useDispatch();
    const createReviewModal = useSelector(state => state.modal.createReviewModal)
    const [reviews, setReviews] = useState(gig.reviews);

    function handleCreateReview(review) {
        setReviews(prevReviews => [...prevReviews, review]);
        dispatch(modalActions.showCreateReview());
    }

    return (
        <div className="gig-show-container">
            <div className="gig-show-title">
                <h1>I will be your {gig.title}</h1>
            </div>
            <div className="gig-show-top-user-info">
                <div className="gig-showcase-bubble-profile">
                    <h1>{gig.seller.username[0]}</h1>
                </div>
                <h3>{gig.seller.fname} {gig.seller.lname}</h3>
                <p>@{gig.seller.username}</p>
            </div>
            <img id="gig-show-img" src={gig.image} />
            <div className="gig-description">
                <h1>About this gig</h1>
                <p>{gig.description}</p>
            </div>
            <hr id="gig-showcase-hr" />
            <h2>About the seller</h2>
            <div className="about-seller">
                <div className="about-seller-profile-icon">
                    <h1>{gig.seller.username[0]}</h1>
                </div>
                <div className="about-seller-profile-right-column">
                    <div className="about-seller-name-username">
                        <h1>{gig.seller.fname} {gig.seller.lname}</h1>
                        <p>@{gig.seller.username}</p>
                    </div>
                </div>
            </div>
            <div className="more-seller-info">
                {/* MAKE SELLER BOX*/}
            </div>
            <div className="more-seller-info">
                {/* MAKE REVIEW STAR BOX*/}
            </div>
            <hr id="gig-showcase-hr" />
            <div className="reviews-header">
                <h2>Reviews</h2>
                <button onClick={handleCreateReview}>Create Review</button>
            </div>
            <div className="gig-reviews">
                {reviews.map((review) => {
                    return <ShowReview key={review.id} review={review} gig={gig} />;
                })}
            </div>
            {createReviewModal && <CreateReview gig={gig} onCreateReview={handleCreateReview} />}
        </div>

    )
}

export default GigShowcase;
