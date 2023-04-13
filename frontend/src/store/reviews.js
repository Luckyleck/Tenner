import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

function receiveReviews(reviews) {
    return ({
        type: RECEIVE_REVIEWS,
        reviews: reviews
    })
}

function receiveReview(review) {
    return ({
        type: RECEIVE_REVIEW,
        review: {
            ...review,
            reviews: review.reviews.map((review) => review.id),
        }
    })
}

function removeReview(reviewId) {
    return ({
        type: REMOVE_REVIEW,
        reviewId: reviewId
    })
}


export function getReview(reviewId) {
    return (state) => state?.reviews ? state.reviews[reviewId] : null
}

export function getReviews(state) {
    return state?.reviews ? Object.values(state.reviews) : []
}


export function fetchReviews() {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/reviews`)

        if (response.ok) {
            const data = await response.json();
            dispatch(receiveReviews(data))
        }
    })
}

export function fetchReview(reviewId) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/reviews/${reviewId}`)

        if (response.ok) {
            const data = await response.json();
            dispatch(receiveReview(data))
        }
    })
}

export function createReview(review) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(receiveReview(data))
        }
    })
}

export function updateReview(review) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/reviews/${review.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })

        if (response.ok) {
            const data = await response.json()
            dispatch(receiveReview(data))
        }
    })

}

export function deleteReview(reviewId) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/reviews/${reviewId}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            dispatch(removeReview(reviewId))
        }
    })
}

function reviewReducer (state = {}, action) {
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...action.reviews };
        case RECEIVE_REVIEW: 
            return { ...state, [action.review.id]: action.review }
        case REMOVE_REVIEW:
            const newReview = { ...state }
            delete newReview[action.reviewId]
            return { ...newReview };
        default: 
            return state
    }
}

export default reviewReducer;