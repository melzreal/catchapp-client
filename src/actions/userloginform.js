
export const updateLoginFormData = userLoginFormData => {
	
	return {
		type: 'UPDATED_LOGIN_DATA',
		userLoginFormData
	} 			
  
}


export const authUserData = user => {
	
	return {
		type: 'LOGIN_USER_SUCCESS',
		user
	} 			
  
}


export const resetLoginData = () => {
	
	return {
		type: 'RESET_LOGIN_FORM'
	}
}