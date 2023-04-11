import React, { useState, useEffect } from "react";
import GigCard from "./GigCard";
import './GigListStyles.css'

function UserFetch() {
    const [user, setUser] = useState({});
    const seller_id = 2

    useEffect(() => {
        fetch(`/api/users/${seller_id}`)
            .then((response) => response.json())
            .then((data) => setUser(data.user));
    }, []);

    console.log(user);

    return <div>{user.fname}</div>;
}

function GigsList() {
    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        fetch("/api/gigs")
            .then((response) => response.json())
            .then((data) => setGigs(data));
    }, []);

    return (
        <div className="gig-card-container">
            <UserFetch />
            <h2>Gigs</h2>
            <div className="gig-card-wrapper">
                {gigs.map((gig) => (
                    <GigCard key={gig.id} gig={gig} />
                ))}
            </div>
        </div>
    );
}

export default GigsList;