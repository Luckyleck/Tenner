import csrfFetch from './csrf'

const SET_SESSION_USER = 'session/setSessionUser';
const REMOVE_SESSION_USER = 'session/removeSessionUser';


export const setCurrentUser = (user) => { //being exported so the editNameModal can use it
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
        const data = await res.json();
        storeCurrentUser(data.user)
        dispatch(setCurrentUser(data.user))
        return res;
    })
}

export function signup(user) {
    return (async (dispatch) => {
        const { username, email, password } = user;
        const res = await csrfFetch('/api/users', {
            method: "POST",
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await res.json();
        storeCurrentUser(data.user);
        dispatch(setCurrentUser(data.user))
        return res;
    })
}

export function logout() {
    return (async (dispatch) => {
        const res = await csrfFetch('api/session', {
            method: 'DELETE'
        })
        storeCurrentUser(null)
        dispatch(removeCurrentUser())
        return res
    })
}

export function restoreSession() {
    return (async (dispatch) => {
        const res = await csrfFetch('/api/session');
        storeCSRFToken(res);

        const data = await res.json();
        storeCurrentUser(data.user);
        dispatch(setCurrentUser(data.user));
        return res;
    })
}



export function updateUser(userData) {
    return (async function (dispatch) {
        try {
            const response = await csrfFetch('/api/users', {
                method: 'PATCH',
                body: JSON.stringify(userData),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();

            storeCurrentUser(data.user);
            dispatch(setCurrentUser(data.user));
        } catch (err) {
            console.error(err);
        }
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