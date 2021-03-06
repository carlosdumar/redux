import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default function configureStore (initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
