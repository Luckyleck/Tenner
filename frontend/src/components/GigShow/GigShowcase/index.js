import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './GigShowcaseStyles.css'
import ShowReview from './ShowReview';
import CreateReview from '../../CreateReview';
import * as modalActions from '../../../store/modals';

function GigShowcase({ gig }) {
    const dispatch = useDispatch();
    const createReviewModal = useSelector(state => state.modal.createReviewModal)

    function handleCreateReview() {
        dispatch(modalActions.showCreateReview())
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
            <hr id="gig-showcase-hr"/>
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
            <hr id="gig-showcase-hr"/>
            <div className="reviews-header">
                <h2>Reviews</h2>
                <p onClick={handleCreateReview}>Create Review</p>
            </div>
            <div className="gig-reviews">
                {gig.reviews.map((review) => {
                    return <ShowReview review={review} gig={gig} />
                })}
            </div>
            {createReviewModal && <CreateReview gig={gig} />}
            {/* <footer>
                <hr id="last-hr"/>
            </footer> */}
        </div>

    )
}

export default GigShowcase;


// json.gig do
//     json.extract! @gig, : title, : description, : seller_id, : base_price, : created_at, : updated_at
// end
