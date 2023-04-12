import React, { useState, useEffect } from 'react'
import './GigShowcaseStyles.css'

function GigShowcase({ gig }) {
    const [seller, setSeller] = useState({});
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState({})
    console.log(gig)

    // useEffect(() => { CHECK GIGS CONTROLLER!
    //     fetch(`/api/gigs/${gig.id}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setReviews(data.reviews);
    //         })
    //         .catch((error) => console.error(error));
    // }, [gig.id]);

    useEffect(() => {
        fetch(`/api/users/${gig.seller_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("i'm in data")
                console.log(data)
                console.log("seller data:", data);
                setSeller(data.user);
            })
            .catch((error) => {
                console.error("Error fetching seller:", error);
                setError(error);
            });
    }, [gig.seller_id]);

    // const {
    //     body, 
    //     review_rating, 
    //     communication_rating, 
    //     recommend_rating, service_rating, 
    //     reviewer_id
    // } = reviews

    // console.log(reviews)
    // console.log(body,review_rating, communication_rating)


    return (
        <>
            <h1>{gig.title}</h1>
            <h1>{seller.username}</h1>
            <h1>{body}</h1>
            <h1>{review_rating}</h1>
        </>
    )
}

export default GigShowcase;