import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './GigCardStyles.css'

function GigCard({ gig }) {

    const colors = ['#1dbf73', '#ff6b6b', '#feca57', '#48dbfb', '#ff9f43', '#6ab04c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
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

    return (

        <div className="gig-card">
            <div
                className="gig-card-image-container"
                onMouseEnter={() => setGigImageHovered(true)}
                onMouseLeave={() => setGigImageHovered(false)}
            >
                <Link to={`/gigs/${gig.id}`}>
                    <img id="gig-image" src={whichImage()} />

                </Link>
                {gig.image_urls?.length > 1 && gigImageHovered && (
                    <div className="gig-card-left-right">
                        <button className="image-cycle-button" onClick={() => handleImageCycle(-1)}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="image-cycle-button" onClick={() => handleImageCycle(1)}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                )}
            </div>

            <div className="seller-info">
                <div className="seller-profile-bubble" style={{ backgroundColor: randomColor }}>
                    <h1>{gig?.seller?.username[0]}</h1>
                </div>
                <div className="seller-name">
                    <Link
                        to={`/users/${gig.seller.id}`}
                        className="seller-profile-link"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <h2>{gig.seller.username}</h2>
                    </Link>
                </div>
            </div>

            <Link to={`/gigs/${gig.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="gig-title">
                    <h2>I will be a {gig.title.toLowerCase()} for you</h2>
                </div>
            </Link>

            <div className="base-price">
                <h1>From&nbsp;${Math.floor(gig.base_price / 5) * 5}</h1>
            </div>

        </div>
    )
}

export default GigCard;

