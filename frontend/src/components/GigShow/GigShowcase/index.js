import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ShowReview from './ShowReview';
import CreateReview from '../../Modals/CreateReview';

import * as modalActions from '../../../store/modals';

import './GigShowcaseStyles.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function GigShowcase({ gig }) {
    const dispatch = useDispatch();
    const createReviewModal = useSelector(state => state.modal.createReviewModal)
    const [reviews, setReviews] = useState(gig.reviews);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [gigImageHovered, setGigImageHovered] = useState(false);

    function whichImage() {
        if (!gig.image) {
            return gig.image_urls[currentImageIndex]
        } else {
            return gig.image
        }
    }

    function handleImageCycle(direction) {
        setCurrentImageIndex((prevIndex) => {
            const maxIndex = gig.image_urls.length - 1;

            if (direction === 1 && prevIndex === maxIndex) {
                return 0;
            } else if (direction === -1 && prevIndex === 0) {
                return maxIndex;
            } else {
                return prevIndex + direction;
            }
        });
    }

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

            <div className="gig-showcase-image-container">
                {gig.image_urls.length > 0 && <button className="image-cycle-button left" onClick={() => handleImageCycle(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>}
                <img id="gig-show-img" src={whichImage()} />
                {gig.image_urls.length > 0 && <button className="image-cycle-button right" onClick={() => handleImageCycle(1)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>}
            </div>

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
