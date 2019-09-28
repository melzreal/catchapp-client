export default( state = [], action) => {

console.log(action.type)

	switch(action.type){
        case 'GET_FRIENDS_SUCCESS':
		return action.friends;

		default:
		return state;
	}
}