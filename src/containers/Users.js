import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard'
import { setLoggedInUser } from '../actions/getusers';
import UserLoginForm from './UserLoginForm'


class Users extends Component {


	componentDidMount(){
	 this.props.setLoggedInUser();
	}

	render() { 

		return (
			<div>
				<div> 
				<h3> Users </h3>			
				{this.props.users.map(user => <UserCard key={user.id} user={user} /> )}
				
				<UserLoginForm />

				</div>
			
			</div>
	
		);
	}
}




const mapStateToProps = (state) => {
  return ({
    currentUser: state.user
  })

}



export default connect(mapStateToProps,{ setLoggedInUser })(Users);