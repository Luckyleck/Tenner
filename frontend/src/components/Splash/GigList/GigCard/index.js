import React from "react";
import { Link } from "react-router-dom";
import './GigCardStyles.css'

function GigCard({ gig }) {

    const colors = ['#1dbf73', '#ff6b6b', '#feca57', '#48dbfb', '#ff9f43', '#6ab04c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // const [images, setImages] = useSelector = gig

    function whichImage() {
        if (!gig.image) {
            return gig.image_urls[1]
        } else {
            return gig.image
        }
    }

    if (!gig.image) {

    }

    return (

        <div className="gig-card">

            <Link to={`/gigs/${gig.id}`}>
                <img id="gig-image" src={whichImage()} />
            </Link>

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

