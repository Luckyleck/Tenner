import React, { useState, useEffect } from 'react'
import './GigShowcaseStyles.css'
import ShowReview from './ShowReview';

function GigShowcase({ gig, reviews }) {
    const [seller, setSeller] = useState({});
    const [error, setError] = useState(null);
    console.log(reviews)
    console.log(gig)

    useEffect(() => {
        fetch(`/api/users/${gig.seller_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // console.log("seller data:", data);
                setSeller(data.user);
            })
            .catch((error) => {
                console.error("Error fetching seller:", error);
                setError(error);
            });
    }, [gig.seller_id]);


    return (
        <div className="gig-show-container">
            <div className="gig-show-title">
                <h1>I will be your {gig.title}</h1>
            </div>
            <div className="gig-show-top-user-info">
                <div className="gig-showcase-bubble-profile">
                    <h1>{seller && seller.username && seller.username[0]}</h1>
                </div>
                <h3>{seller.fname} {seller.lname}</h3>
                <h6>@{seller.username}</h6>
            </div>
            <img id="gig-show-img" src={gig.image} />
            <div className="gig-description">
                <h1>About this gig</h1>
                <p>{gig.description}</p>
            </div>

            <h2>About the seller</h2>
            <div className="about-seller">
                <div className="about-seller-profile-icon">
                    <h1>{seller && seller.username && seller.username[0]}</h1>
                </div>
                <div className="about-seller-profile-right-column">
                    <div className="about-seller-name-username">
                        <h1>{seller.fname} {seller.lname}</h1>
                        <h1>{seller.username}</h1>
                    </div>
                </div>
            </div>
            <div className="more-seller-info">
                {/* MAKE SELLER BOX*/}
            </div>
            <div className="more-seller-info">
                {/* MAKE REVIEW STAR BOX*/}
            </div>
            {/* <div className="gig-reviews">
                {reviews.map((review) => {
                    return <ShowReview review={review} />
                })}
            </div> */}
        </div>

    )
}

export default GigShowcase;


// json.gig do
//     json.extract! @gig, : title, : description, : seller_id, : base_price, : created_at, : updated_at
// end
