import React, {Component} from 'react';

import './App.css';

import CatchFriend from './CatchFriends';


const CatchFriends = () => 
	<div>
	<h3> Friendly Component </h3>
	</div>;


class App extends Component{


	render(){
		return(
		<div className="App"> 
			<CatchFriend />
		</div>
		);

	}
}

export default App;