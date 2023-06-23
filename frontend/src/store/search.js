// export const SET_SEARCH = "SET_SEARCH"
// export const REMOVE_SEARCH = "REMOVE_SEARCH"

// export function setSearch(term) {
//     return ({
//         type: SET_SEARCH,
//         payload: term
//     })
// }

// export function removeSearch(term) {
//     return ({
//         type: REMOVE_SEARCH,
//         payload: term
//     })
// }

const initialState = {
    search: null
}

// function searchReducer(state = initialState, action) {
//     switch (action.type) {
//         case SET_SEARCH:
//             return {
//                 search: action.payload
//             }
//         case REMOVE_SEARCH:
//             return {
//                 search: null
//             }
//         default:
//             return state
//     }
// }

// export default searchReducer;

export const SET_SEARCH = "SET_SEARCH"

export function receiveSearchResults (searchResults) {
    return ({
        type: SET_SEARCH,
        searchResults: searchResults
    })
}

export function fetchSearchResults (query) { 
    return (async (dispatch) => {
        const response = await fetch(`/api/gigs/search?gigs=${query}`);
        
        if (response.ok) {
            const data = await response.json();
            dispatch(receiveSearchResults(data))
        }
    })
}

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH:
            return {
                search: action.searchResults
            }
        case REMOVE_SEARCH:
            return {
                search: null
            }
        default:
            return state
    }
}

export default searchReducer;

 