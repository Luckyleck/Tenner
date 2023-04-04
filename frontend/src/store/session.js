import csrfFetch from './csrf'

const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';


const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        payload: user,
    };
};

const removeSessionUser = () => {
    return {
        type: REMOVE_SESSION_USER,
    };
};

export function login({credential, password}) {
    return (async (dispatch) => {
        const res = await csrfFetch('/api/session', {
            method: 'POST',
            body: JSON.stringify({ credential, password })
        });
        const user = await res.json();
        dispatch(setSessionUser(user))
    })
}

const initialState = { user: null };

// Reducer
const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION_USER:
            return { ...state, user: action.payload };
        case REMOVE_SESSION_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};



export default sessionReducer