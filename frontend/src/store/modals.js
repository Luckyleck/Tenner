const SHOW_JOIN_1 = 'SHOW_JOIN_1';
const HIDE_JOIN_1 = 'HIDE_JOIN_1';
const SHOW_JOIN_2 = 'SHOW_JOIN_2';
const HIDE_JOIN_2 = 'HIDE_JOIN_2';
const SHOW_SIGNIN = 'SHOW_SIGNIN';
const HIDE_SIGNIN = 'HIDE_SIGNIN';
const SHOW_EDIT_1 = 'SHOW_EDIT_1';
const HIDE_EDIT_1 = 'HIDE_EDIT_1';
const SHOW_PURCHASE_MODAL = 'SHOW_PURCHASE_1';
const HIDE_PURCHASE_MODAL = 'HIDE_PURCHASE_1';
const SHOW_CREATE_REVIEW = 'SHOW_CREATE_REVIEW';
const HIDE_CREATE_REVIEW = 'HIDE_CREATE_REIVEW';

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

export function showEditModal() {
    return ({
        type: SHOW_EDIT_1
    })
}

export function hideEditModal() {
    return ({
        type: HIDE_EDIT_1
    })
}

export function showPurchaseModal() {
    return ({
        type: SHOW_PURCHASE_MODAL
    })
}

export function hidePurchaseModal() {
    return ({
        type: HIDE_PURCHASE_MODAL
    })
}

export function showCreateReview() {
    return ({
        type: SHOW_CREATE_REVIEW
    })
}

export function hideCreateReview() {
    return ({
        type: HIDE_CREATE_REVIEW
    })
}

const initialState = {
    joinModal1: false,
    joinModal2: false,
    signinModal: false,
    editModal: false,
    purchaseModal: false,
    createReviewModal: false
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
        case SHOW_EDIT_1:
            return {
                ...state,
                editModal: true
            };
        case HIDE_EDIT_1:
            return {
                ...state,
                editModal: false
            };
        case SHOW_PURCHASE_MODAL:
            return {
                ...state,
                purchaseModal: true
            }
        case HIDE_PURCHASE_MODAL:
            return {
                ...state,
                purchaseModal: false
            }
        case SHOW_CREATE_REVIEW:
            return {
                ...state,
                createReviewModal: true
            }
        case HIDE_CREATE_REVIEW:
            return {
                ...state,
                createReviewModal: false
            }
        default:
            return state;
    }
}