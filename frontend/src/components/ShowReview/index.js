import React, { useState, useEffect } from 'react';
import './ShowReviewStyles.css';

function ShowReview({ reviews }) {
    const [reviewerIds, setReviewerIds] = useState([]);
    const [reviewers, setReviewers] = useState([])

    useEffect(() => {
        const ids = reviews.map(review => review.reviewer_id);
        setReviewerIds(ids);
    }, [reviews]);

    console.log(reviewerIds)

    useEffect(() => {
        async function getUsers() {
            const promises = reviewerIds.map(async (id) => {
                const response = await fetch(`/api/users/${id}`);
                const data = await response.json();
                return data;
            });
            const results = await Promise.all(promises);
            setReviewers(results);
        }
        getUsers();
    }, [reviewerIds]);

    console.log(reviewers);

//     const { listingId } = useParams();
//     const dispatch = useDispatch();
//     const listing = useSelector(getListing(listingId));
//     // const userId = listing ? listing.user_id : null 
//     // const user = useSelector(state => state.users ? state.users[userId] : null)

//     useEffect(() => {
//         // debugger
//         dispatch(fetchListing(listingId))
//     }, [listingId, dispatch])

//   // useEffect(() => {
//   //   dispatch(fetchUser(listing.userId))
//   //   }, [listing, dispatch])
    

    return (
        <>
            {reviews.map((review) => (
                <div key={review.id} className="single-review">
                    <h1>user.username</h1>
                    <p>{review.body}</p>
                    <p>{review.review_rating}</p>
                    <p>{review.communication_rating}</p>
                    <p>{review.recommend_rating}</p>
                    <p>{review.service_rating}</p>
                </div>
            ))}
        </>
    )
}

export default ShowReview;