export default( state = {
	friendname: '',
  	contact: '',
  	reached_out: ''
}, action) => {

console.log(action.type)

	switch(action.type) {
        case 'UPDATED_DATA':
		return action.friendFormData;

		default:
		return state;
	}
}