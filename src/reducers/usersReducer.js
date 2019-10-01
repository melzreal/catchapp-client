export default( state = [], action) => {

	switch(action.type){
		case 'LOGIN_USER_SUCCESS':
		return action.user;

        case 'GET_USERS_SUCCESS':
		return action.users;

		case 'ADD_USER_SUCCESS':
		return state.concat(action.user);


		default:
		return state;
	}
}

