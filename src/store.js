import {
	createStore,
	compose,
	applyMiddleware,
	combineReducers
} from 'redux';

import catchfriends from './reducers/catchfriendsReducer'
import thunk from 'redux-thunk';


const reducers = combineReducers({
	friends: catchfriends
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;







