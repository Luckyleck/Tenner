import React, { useState, useEffect } from "react";
import './GigListStyles.css'

function GigsList() {
    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        fetch("/api/gigs")
            .then((response) => response.json())
            .then((data) => setGigs(data));
    }, []);

    return (
        <div className="gig-card-container">
            <h2>Gigs</h2>
            <div className="gig-card-wrapper">
                {gigs.map((gig) => (
                    <div key={gig.id} className="gig-card">
                        <h3>{gig.title}</h3>
                        <p>{gig.description}</p>
                        <p>Base Price: ${gig.base_price}</p>
                        {/* This will replaced with some gig component*/}
                    </div>
                ))}
            </div>
        </div>
    );
}



export default GigsList;