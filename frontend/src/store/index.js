import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import sessionReducer from './session';
import modalReducer from "./modals";
import gigReducer from "./gigs";
import reviewReducer from "./reviews";
import searchReducer from "./search";
import usersReducer from "./users";

export const rootReducer = combineReducers({
    session: sessionReducer,
    modal: modalReducer,
    gigs: gigReducer,
    reviews: reviewReducer,
    search: searchReducer, 
    users: usersReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore