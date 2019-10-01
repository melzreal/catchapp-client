import React from 'react';

const UserLogin = ({handleLoginChange, handleLoginSubmit, email, password}) => {

	return(
		<div className="Login"> 
			<form onSubmit ={handleLoginSubmit}>

				<label> Email: 
				<input type="text" 
				name="email" 
				onChange={handleLoginChange}
				value={email}/> </label>

				<label> Password: 
				<input type="password" 
				name="password" 
				onChange={handleLoginChange}
				value={password}/> </label>
				
				<input type="submit" value="Submit" />
			</form>
		</div>

		); 
} 

export default UserLogin;