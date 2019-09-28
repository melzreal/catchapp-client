import {
	createStore,
	compose,
	applyMiddleware,
	combineReducers
} from 'redux';

import thunk from 'redux-thunk';

const catchfriendsReducer = ( state = [], action) => {

	switch(action.type){
        case 'GET_FRIENDS_SUCCESS':
		return action.friends;

		default:
		return state;
	}
}

const reducers = combineReducers({
	friends: catchfriendsReducer
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;







