import React, { useState, useEffect } from "react";
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

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="gig-card">
            <img id="gig-image" src="https://gcdnb.pbrd.co/images/K9dVb0qOWWI2.jpg?o=1" />
            <div className="seller-info">
                <div className="seller-profile-bubble">

                </div>
                <div className="seller-name">
                    <p>{seller.fname}</p>
                </div>
            </div>

        </div>
    )
}

export default GigCard;