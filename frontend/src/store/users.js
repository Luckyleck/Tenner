// This store is for users that the current user is viewing

import csrfFetch from "./csrf";

export const RECEIVE_USERS = "SET_USERS";
export const RECEIVE_USER = "SET_USER";

function receiveUsers (users) {
    return ({
        type: RECEIVE_USERS,
        users: users
    })
}

function receiveUser (user) {
    return ({
        type: RECEIVE_USER,
        user: user
    })
}

export function fetchUsers() {
    return (async (dispatch) => {
        const response = await csrfFetch('/api/users')

        if (response.ok) {
            const data = await response.json();
            dispatch(receiveUsers)
        }
    })
}

export function fetchUser(userId) {
    return (async (dispatch) => {
        const response = await csrfFetch(`/api/users/${userId}`)

        if (response.ok) {
            const data = await response.json();
            dispatch(receiveUser(data))
        }
    })
}


function usersReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return { ...action.users };
        case RECEIVE_USER:
            return { ...action.user }
        default: 
            return state;
    }
}

export default usersReducer;


