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

const addFriend = friend => {
	return {
		type: 'ADD_FRIEND_SUCCESS',
		friend
	}
}


export const createFriend = friend => {

	return dispatch => {
	
		return fetch(`${API_URL}/catchfriends`, {
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({catchfriend: friend})
		})
		.then(resp => resp.json())
		.then(friend => dispatch(addFriend(friend)))
		 

 }
}
