import React, { useState } from 'react'
import './GigReviewsStyles.css'
import ShowReview from '../../GigShow/GigShowcase/ShowReview';
import CreateReview from '../../CreateReview';

function GigReviews({ gig }) {
    const [reviews, setReviews] = useState(gig.reviews)

    // if (!gig) {
    //     return <div>Loading...</div>;
    // }

    console.log(reviews)
    console.log(gig)

    return (
        <div>
            <h1>Gig Reviews</h1>
            {/* {reviews.map((review, index) => (
                <div key={index}>
                    <p>Username: {review.reviewer.username}</p>
                    <p>Review: {review.body}</p>
                </div>
            ))} */}
            <div className="gig-reviews">
                {reviews.map((review) => {
                    return <ShowReview
                        key={review.id}
                        review={review}
                        gig={gig}
                    />
                })}
            </div>
        </div>
    )
}

export default GigReviews;
