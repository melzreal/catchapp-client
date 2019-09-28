const API_URL = process.env.REACT_APP_API_URL;

//action creators
const setFriends = friends => {
	return {
		type: 'GET_FRIENDS_SUCCESS',
		friends
	}
}


//async actions
export const getFriends = () => {
	return dispatch => {
	
		return fetch(`${API_URL}/catchfriends`)
				.then(resp => resp.json())
				.then(friends => dispatch(setFriends(friends)))
				.catch(error => console.log(error));
			
		}
}

 