import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const enhancer = componentWithDevTools(
    applyWiddleware(logger())
);

export default function configureStore (initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
