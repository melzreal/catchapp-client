import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard'



class Users extends Component {


	componentDidMount(){
	 this.props.getUsers();
	}

	render() { 

		return (
			<div>
				<div> 
				<h3> Users </h3>			
				{this.props.users.map(user => <UserCard key={user.id} user={user} /> )}

				</div>
			
			</div>
	
		);
	}
}




export default Users;