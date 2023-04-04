import csrfFetch from './csrf'

const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';


const setCurrentUser = (user) => {
    return {
        type: SET_SESSION_USER,
        payload: user,
    };
};

const removeCurrentUser = () => {
    return {
        type: REMOVE_SESSION_USER,
    };
};

function storeCSRFToken(response) {
    const csrfToken = response.headers.get('X-CSRF-Token');
    if (csrfToken) {
        sessionStorage.setItem('X-CSRF-Token', csrfToken);
    }
}

function storeCurrentUser(user) {
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        sessionStorage.removeItem('currentUser');
    }
}

export function login({ credential, password }) {
    return (async (dispatch) => {
        const res = await csrfFetch('/api/session', {
            method: 'POST',
            body: JSON.stringify({ credential, password })
        });
        const user = await res.json();
        storeCurrentUser(user)
        dispatch(setCurrentUser(user))
        return res;
    })
}

export function restoreSession () {
    return (async (dispatch) => {
        const res = await csrfFetch('/api/session');
        storeCSRFToken(res);

        const user = await res.json();
        storeCurrentUser(user);
        dispatch(setCurrentUser(user));
        return res;
    })
}

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
  };

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