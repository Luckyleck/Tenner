import React, { useState, useEffect } from "react";
import './GigCardStyles.css'


function GigCard({ gig }) {
    const [seller, setSeller] = useState({})

    useEffect(() => {
        fetch(`api/users/${gig.seller_id}`)
            .then((response) => response.json())
            .then((data) => setSeller(data));
    }, [gig.seller_id])

    return (
        <div className="gig-card">
            <img id="gig-image"src="https://gcdnb.pbrd.co/images/K9dVb0qOWWI2.jpg?o=1" />
            <div className="seller-info">
                <div className="seller-profile-bubble">

                </div>
                <div className="seller-name">
                    <p>{seller.username}</p> 
                </div>
            </div>

        </div>
    )
}

export default GigCard;