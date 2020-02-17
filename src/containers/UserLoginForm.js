import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginFormData } from '../actions/userloginform';
import { setLoggedInUser } from '../actions/getusers';
import UserLoginContainer from './UserLoginContainer';


class UserLoginForm extends Component {

constructor(props){
	super(props)
	this.state = {
		user: '',
		email: '',
		password: ''
	   
	}
}

  handleLoginChange = event => {
	const {name, value} = event.target;

		this.setState({
			
				...this.state,
				[name]: value
			
		});

	// const userLoginFormData = Object.assign({}, this.props.loginForm, {
 //      [name]: value
 //    });

 	 const userLoginFormData = this.state;
     this.props.updateLoginFormData(userLoginFormData);	

	}


  handleLoginSubmit = event => {
  	
	event.preventDefault();
	this.props.setLoggedInUser(this.state);
	
	

};

	  render() {
	  
	 
		const {email, password} = this.props;

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

					<div> 
						
					</div>
				</div>

				); 
		}


}

const mapStateToProps = (state) => {
  return ({
    userLoginFormData: state
  })

}


export default connect(mapStateToProps, {updateLoginFormData, setLoggedInUser})(UserLoginForm);