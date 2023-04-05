import csrfFetch from './csrf.js'

const SHOW_JOIN_1 = 'SHOW_JOIN_1';
const HIDE_JOIN_1 = 'HIDE_JOIN_1';
const SHOW_JOIN_2 = 'SHOW_JOIN_2';
const HIDE_JOIN_2 = 'HIDE_JOIN_2';
const SHOW_SIGNIN = 'SHOW_SIGNIN';
const HIDE_SIGNIN = 'HIDE_SIGNIN';


export function showJoinOne() {
    return ({
        type: SHOW_JOIN_1
    });
}

export function hideJoinOne() {
    return ({
        type: HIDE_JOIN_1
    });
}

export function showJoinTwo() {
    return ({
        type: SHOW_JOIN_2
    });
}

export function hideJoinTwo() {
    return ({
        type: HIDE_JOIN_2
    });
}

export function showSignin() {
    return ({
        type: SHOW_SIGNIN
    });
}

export function hideSignin() {
    return ({
        type: HIDE_SIGNIN
    });
}

const initialState = {

    joinModal1: false,
    joinModal2: false,
    signinModal: false
    
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_JOIN_1:
            return {
                ...state,
                joinModal1: true
            };
        case HIDE_JOIN_1:
            return {
                ...state,
                joinModal1: false
            };
        case SHOW_JOIN_2:
            return {
                ...state,
                joinModal2: true
            };
        case HIDE_JOIN_2:
            return {
                ...state,
                joinModal2: false
            };
        case SHOW_SIGNIN:
            return {
                ...state,
                signinModal: true
            };
        case HIDE_SIGNIN:
            return {
                ...state,
                signinModal: false
            };
        default:
            return state;
    }
}