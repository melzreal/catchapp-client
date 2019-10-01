import React, {Component} from 'react';
import { connect } from 'react-redux';
import './CatchFriends.css';
import FriendCard from '../components/FriendCard';
import CatchFriendForm from './CatchFriendForm'
import { getFriends } from '../actions/catchfriends';




class CatchFriends extends Component {


	componentDidMount(){
	 this.props.getFriends();
	}

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

// const handleChange = () => {
//   const reached = this.state.reached_out;
//   this.setState({reached_out: !reached});

// }

//onClick={this.handleChange()}



const mapStateToProps = (state) => {
  return ({
    friends: state.friends
  })

}



export default connect(mapStateToProps, { getFriends })(CatchFriends);