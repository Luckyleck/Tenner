import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './GigCardStyles.css'


function GigCard({ gig }) {
    const [seller, setSeller] = useState({});
    const [error, setError] = useState(null);
    console.log(gig)

    useEffect(() => {
        fetch(`api/users/${gig.seller_id}`)
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

    function handleClick() {

    }



    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="gig-card" onClick={handleClick}>
            <Link to={`/gigs/${gig.id}`}>
                <img id="gig-image" src="https://gcdnb.pbrd.co/images/K9dVb0qOWWI2.jpg?o=1" />
            </Link>
            <div className="seller-info">
                <div className="seller-profile-bubble">
                    <h1>{seller && seller.username && seller.username[0]}</h1>
                </div>
                <div className="seller-name">
                    <p>{seller.username}</p>
                </div>
            </div>
            <Link to={`/gigs/${gig.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="gig-title">
                    <p>I will be a {gig.title.toLowerCase()}</p>
                </div>
            </Link>
            <div className="base-price">
                <p>STARTING AT</p>
                <h2>${Math.floor(gig.base_price / 5) * 5}</h2>
            </div>

        </div>
    )
}

export default GigCard;