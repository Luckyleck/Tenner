import React, { useState, useEffect } from 'react'
import './GigShowcaseStyles.css'

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
                console.log("seller data:", data);
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
                <div className="seller-profile-bubble">
                    <h1>{seller && seller.username && seller.username[0]}</h1>
                </div>
                <p>{seller.username}</p>
            </div>
            <img id="gig-show-img" src="https://gcdnb.pbrd.co/images/K9dVb0qOWWI2.jpg?o=1" />
            <div className="gig-description">
                <h1>About this gig</h1>
                <p>{gig.description}</p>
            </div>
            {/* <div className="gig-reviews">
                <h1>{gig.reviews.body}</h1>
            </div> */}
        </div>
    )
}

export default GigShowcase;


// json.gig do
//     json.extract! @gig, : title, : description, : seller_id, : base_price, : created_at, : updated_at
// end
