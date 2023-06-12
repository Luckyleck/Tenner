import csrfFetch from "./csrf";


export const RECEIVE_GIG = "RECEIVE_GIG";
export const RECEIVE_GIGS = "RECEIVE_GIGS";
export const REMOVE_GIG = "REMOVE_GIG";
export const UPDATE_SEARCHED_GIGS = "UPDATE_SEARCHED_GIGS";
export const RECEIVE_USER_GIGS = "RECEIVE_USER_GIGS";

function receiveGigs(gigs) {
    return ({
        type: RECEIVE_GIGS,
        gigs: gigs
    })
}

function receiveGig(gig) {
    return ({
        type: RECEIVE_GIG,
        gig: gig
    })
}

function removeGig(gigId) {
    return ({
        type: REMOVE_GIG,
        gigId: gigId
    })
}

function updateSearchedGigs(gigs) {
    return {
        type: UPDATE_SEARCHED_GIGS,
        gigs: gigs,
    };
}

function receiveUserGigs(gigs) {
    return {
        type: RECEIVE_USER_GIGS,
        gigs: gigs
    }
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

export function fetchUserGigs(userId) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/users/${userId}`)
        
        if (response.ok) {
            const data = await response.json();
            const { gigs } = data;
            dispatch(receiveUserGigs(gigs))
        }
    })
}


export function searchGigs(searchTerm) {
    return async (dispatch) => {
        const response = await csrfFetch(`/api/gigs`);

        if (response.ok) {
            const data = await response.json();
            const filteredGigs = data.filter((gig) => {
                const title = gig.title.toLowerCase();
                const description = gig.description.toLowerCase();
                const search = searchTerm.toLowerCase();
                return title.includes(search) || description.includes(search);
            });
            dispatch(updateSearchedGigs(filteredGigs));
        }
    };
}

export function createGig(gig) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/gigs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(gig)
        })

        if (response.ok) {
            // const data = await response.json()
            // dispatch(receiveGig(data))
            console.log('Gig created')
        }
    })
}

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

export function deleteGig(gigId) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/gigs/${gigId}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            dispatch(removeGig(gigId))
        }
    })
}

function gigReducer (state = {}, action) {
    switch (action.type) {
        case RECEIVE_GIGS:
            return { ...action.gigs };
        case RECEIVE_GIG: 
            // return { ...state, [action.gig.id]: action.gig }
            return { gig: action.gig } 
        case REMOVE_GIG:
            const newGigsSlice = { ...state }
            delete newGigsSlice[action.gigId]
            return { ...newGigsSlice };
        case UPDATE_SEARCHED_GIGS:
            return { ...action.gigs };
        case RECEIVE_USER_GIGS:
            return { ...action.gigs };
        default: 
            return state
    }
}

export default gigReducer;
