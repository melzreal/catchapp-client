import {
	createStore,
	compose,
	applyMiddleware,
	combineReducers
} from 'redux';

import friends from './reducers/catchfriendsReducer';
import usersReducer from './reducers/usersReducer'
import friendFormData from './reducers/friendFormData';
import thunk from 'redux-thunk'; 


const reducers = combineReducers({
	friends,
	friendFormData,
	usersReducer
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;







