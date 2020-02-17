const API_URL = process.env.REACT_APP_API_URL;

//action creators
const setUsers = users => {
	return {
		type: 'GET_USERS_SUCCESS',
		users
	}
}


//async actions
export const getUsers = () => {
	return dispatch => {
	
		return fetch(`${API_URL}/users`)
				.then(resp => resp.json())
				.then(users => dispatch(setUsers(users)))
				.catch(error => console.log(error));
			
		}
}


const loginUser = user => {
	return {
		type: 'LOGIN_USER_SUCCESS',
		user
	}
}


const addUser = user => {
	return {
		type: 'ADD_USER_SUCCESS',
		user
	}
}




export const setLoggedInUser = user => {

	return dispatch => {
		return fetch(`${API_URL}/login`, {
			method: "POST",
			headers:{
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({user: user})
			})
			 .then(resp => resp.json())
			 .then(user => {
			 	user.error ? alert("Invalid Credentials") : dispatch(loginUser(user))
			 })

			
		}
}





export const createUser = user => {

	return dispatch => {
	
		return fetch(`${API_URL}/users`, {
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({user: user})
		})
		.then(resp => resp.json())
		.then(user => {
			dispatch(addUser(user))
			// dispatch(resetFormData())
		})
    }
}
