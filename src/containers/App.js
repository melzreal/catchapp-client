import React, {Component} from 'react';

import './App.css';
import CatchFriends from './CatchFriends';
import User from './Users';
import UserLoginForm from './UserLoginForm'



class App extends Component{



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
				<h3> You are Logged in as: </h3>
				<CatchFriends />
				<UserLoginForm />


				
			</div>
	</div>
		);

	}
}

export default App;