export const updatefriendFormData = friendFormData => {
	
	return {
		type: 'UPDATED_DATA',
		friendFormData
	} 			
  
}


export const resetFormData = () => {
	
	return {
		type: 'RESET_FORM'
	}
}