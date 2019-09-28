const initialState = {
	friendname: '',
  	contact: '',
  	reached_out: false
}

export default( state = initialState, action) => {



	switch(action.type) {
        case 'UPDATED_DATA':
		return action.friendFormData;

		case 'RESET_FORM':
		return initialState;

		default:
		return state;
	}
}