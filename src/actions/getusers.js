
const API_URL = process.env.REACT_APP_API_URL;

//action creators
const setUsers = users => {
	return {
		type: 'GET_USERS_SUCCESS',
		users
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



//async actions
export const getUsers = () => {
	return dispatch => {
	
		return fetch(`${API_URL}/users`)
				.then(resp => resp.json())
				.then(users => dispatch(setUsers(users)))
				.catch(error => console.log(error));
			
		}
}

export const setLoggedInUser = () => {


	return dispatch => {

			const userInfo = this.state.loginForm;
			const headers = {
			method: "POST",
			headers:{
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({user: userInfo})
			}
	
		return fetch(`${API_URL}/login`, headers)
			 .then(resp => resp.json())
			 .then(userJSON => {
			 	userJSON.error ? alert("Invalid Credentials") : dispatch(loginUser(userJSON))
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
