import React, {Component} from 'react';

import './App.css';
import CatchFriend from './CatchFriends';
import User from './Users';
import UserLogin from '../components/UserLogin'

const API_URL = process.env.REACT_APP_API_URL;


class App extends Component{

constructor(){
	super();

	this.state = {
		currentUser: null,
		loginForm: {
			email: '',
			password: ''
		}
	};
}

handleLoginChange = event => {
	const {name, value} = event.target;

	this.setState({
		loginForm: {
			...this.state.loginForm,
			[name]: value
		}
	});
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
	 .catch(console.log)

}


	render(){
		return(
	<div>
		<div className="Navigation">
			<header>
				<ul>
				  <li><a href="/">Home</a></li>
				  <li><a href="/">Login</a></li>
				  <li><a href="/">Sign Up</a></li>
				  <li><a href="/">Catchfriends</a></li>
				</ul>
			</header>
		 </div>
			<div className="App"> 
				<CatchFriend />
				<UserLogin 
				handleLoginChange={this.handleLoginChange}
				handleLoginSubmit={this.handleLoginSubmit}
				email={this.state.loginForm.email}
				password={this.state.loginForm.password}
				/>

				
			</div>
	</div>
		);

	}
}

export default App;