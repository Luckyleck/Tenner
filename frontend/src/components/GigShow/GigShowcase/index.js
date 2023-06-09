import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import ShowReview from './ShowReview';
import CreateReview from '../../Modals/CreateReview';

import * as modalActions from '../../../store/modals';

import './GigShowcaseStyles.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
                    <Link
                        to={`/users/${gig.seller.id}`}
                        className="seller-profile-link"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <h1>{gig.seller.username[0]}</h1>
                    </Link>
                </div>
                <h3>{gig.seller.fname} {gig.seller.lname}</h3>
                <Link
                    to={`/users/${gig.seller.id}`}
                    className="seller-profile-link"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <p>@{gig.seller.username}</p>
                </Link>
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
                    <Link
                        to={`/users/${gig.seller.id}`}
                        className="seller-profile-link"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                    <h1>{gig.seller.username[0]}</h1>
                    </Link>
                </div>
                <div className="about-seller-profile-right-column">
                    <div className="about-seller-name-username">
                        <h1>{gig.seller.fname} {gig.seller.lname}</h1>
                        <Link
                            to={`/users/${gig.seller.id}`}
                            className="seller-profile-link"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <p>@{gig.seller.username}</p>
                        </Link>
                    </div>
                </div>
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
