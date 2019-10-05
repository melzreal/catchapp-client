import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateLoginFormData } from '../actions/userloginform';
import { setLoggedInUser } from '../actions/getusers';


const API_URL = process.env.REACT_APP_API_URL;

class UserLoginForm extends Component {

	state = {
		currentUser: null,
		loginForm: {
		email: '',
		password: ''
		}
	}


  handleLoginChange = event => {
	const {name, value} = event.target;

		this.setState({
			loginForm: {
				...this.state.loginForm,
				[name]: value
			}
		});
	// const userLoginFormData = Object.assign({}, this.props.loginForm, {
 //      [name]: value
 //    });

     this.props.updateLoginFormData(this.state);	

	}


  handleLoginSubmit = event => {

	event.preventDefault();

	const userInfo = this.state.loginForm;
	const headers = {
		method: "POST",
		headers:{
			'Content-Type': 'application/json'
		},
			body: JSON.stringify({user: userInfo})
	}

	 fetch(`${API_URL}/login`, headers)
	 .then(resp => resp.json())
	 .then(userJSON => {
	 	
	 	userJSON.error ? alert("Invalid Credentials") : this.setState({ currentUser: userJSON})
	 })

	

};

	  render() {
	  

		const {email, password} = this.state;

			return(
				<div className="Login"> 

			
					<form onSubmit ={this.handleLoginSubmit}>

						<label> Email: 
						<input type="text" 
						name="email" 
						onChange={this.handleLoginChange}
						value={email}/> </label>

						<label> Password: 
						<input type="password" 
						name="password" 
						onChange={this.handleLoginChange}
						value={password}/> </label>
						
						<input type="submit" value="Submit" />
					</form>
				</div>

				); 
		}


}

const mapStateToProps = (state) => {
  return ({
    loginForm: state.loginForm
  })

}


export default connect(mapStateToProps, {updateLoginFormData, setLoggedInUser})(UserLoginForm);