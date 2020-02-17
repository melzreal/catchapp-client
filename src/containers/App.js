import React, { Component } from 'react';

import './App.css';
import CatchFriends from './CatchFriends';
import User from './Users';
import UserLoginForm from './UserLoginForm';
import { Switch, Route, Link, NavLink, withRouter } from 'react-router-dom';


const App = ({ history }) => {

	const handleClick = () => {

		if (false) {
			history.push("/login")
		} else {
			history.push("/home")
		}
	}

	return (

		<div>
			<div className="Navigation">
				<header>
					<ul>
						<li><NavLink to="/login">Login</NavLink> </li>
						<li><NavLink to="/friends">Catchfriends</NavLink></li>
					</ul>
				</header>
			</div>
			<Switch>
				<Route exact path="/login" component={UserLoginForm} />
				<Route exact path="/friends" component={CatchFriends} />

			</Switch>

		</div>
	);

}


export default App;