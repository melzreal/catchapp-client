import React, {Component} from 'react';
import './App.css';

import CatchFriend from './CatchFriends';

const friends = [{
	name: "Marta",
	contact: "maaarrrsts1133a@gmail.com",
	reached_out: false
},
{
	name: "Fran",
	contact: "frans209432@gmail.com",
	reached_out: false
}]

const CatchFriends = () => 
	<div>
	<h3> catchFriends Component </h3>
	</div>;


class App extends Component{

	render(){
		return(

	<div className="App"> 
		App Contaaainerooouu 
		<CatchFriend friends ={friends} />
	</div>
		);

	}
}

export default App;