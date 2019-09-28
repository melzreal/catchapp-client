export default( state = [], action) => {

console.log(action.type)

	switch(action.type){
        case 'GET_FRIENDS_SUCCESS':
		return action.friends;

		case 'ADD_FRIEND_SUCCESS':
		return state.concat(action.friend);

		default:
		return state;
	}
}