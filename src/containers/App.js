import React, {Component} from 'react';
import './App.css';

import CatchFriend from './CatchFriends';

const API_URL = process.env.REACT_APP_API_URL;

const CatchFriends = () => 
	<div>
	<h3> catchFriends Component </h3>
	</div>;


class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			friends: []
		}
	}

	componentDidMount(){
		fetch(`${API_URL}/catchfriends`)
		.then(resp => resp.json())
		.then(friends => this.setState({friends}))
	}

	render(){
		console.log(this.state)
		return(

	<div className="App"> 
		App Contaaainerooouu 
		<CatchFriend friends ={this.state.friends} />
	</div>
		);

	}
}

export default App;