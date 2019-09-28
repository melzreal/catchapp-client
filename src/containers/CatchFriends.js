import React, {Component} from 'react';
import './CatchFriends.css';
import FriendCard from '../components/FriendCard';
import CatchFriendForm from '../containers/CatchFriendForm'

class CatchFriends extends Component {



	render() { 

		return (

			<div>
				<div> 
				<h3> Friends To Catch Up with </h3>			
				{this.props.friends.map(friend => <FriendCard key={friend.id} friend={friend} /> )}

				</div>
				<CatchFriendForm />
			</div>
	
		);
	}
}

export default CatchFriends;