import csrfFetch from "./csrf";


export const RECEIVE_GIG = "RECEIVE_GIG"
export const RECEIVE_GIGS = "RECEIVE_GIGS"
export const REMOVE_GIG = "REMOVE_GIG"

function receiveGigs(gigs) {
    return ({
        type: RECEIVE_GIGS,
        gigs: gigs
    })
}

function receiveGig(gig) {
    return ({
        type: RECEIVE_GIG,
        gig: {
            ...gig,
            reviews: gig.reviews
        }
    })
}

function removeGig(gigId) {
    return ({
        type: REMOVE_GIG,
        gigId: gigId
    })
}


export function getGig(gigId) {
    return (state) => state?.gigs ? state.gigs[gigId] : null
}

export function getGigs(state) {
    return state?.gigs ? Object.values(state.gigs) : []
}


export function fetchGigs() {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/gigs`)

        if (response.ok) {
            const data = await response.json();
            dispatch(receiveGigs(data))
        }
    })
}

export function fetchGig(gigId) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/gigs/${gigId}`)

        if (response.ok) {
            const data = await response.json();
            dispatch(receiveGig(data))
        }
    })
}

// export function createGig(gig) {
//     return (async (dispatch) => {
//         const response = await csrfFetch(`/api/gigs`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(gig)
//         })

//         if (response.ok) {
//             const data = await response.json()
//             dispatch(receiveGig(data))
//         }
//     })
// }

// export function updateGig(gig) {
//     return (async (dispatch) => {
//         const response = await csrfFetch(`/api/gigs/${gig.id}`, {
//             method: 'PATCH',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(gig)
//         })

//         if (response.ok) {
//             const data = await response.json()
//             dispatch(receiveGig(data))
//         }
//     })

// }

// export function deleteGig(gigId) {
//     return (async (dispatch) => {
//         const response = await csrfFetch(`/api/gigs/${gigId}`, {
//             method: 'DELETE'
//         })

//         if (response.ok) {
//             dispatch(removeGig(gigId))
//         }
//     })
// }

function gigReducer (state = {}, action) {
    switch (action.type) {
        case RECEIVE_GIGS:
            return { ...action.gigs };
        case RECEIVE_GIG: 
            return { ...state, [action.gig.id]: action.gig }
        case REMOVE_GIG:
            const newGig = { ...state }
            delete newGig[action.gigId]
            return { ...newGig };
        default: 
            return state
    }
}

export default gigReducer;
