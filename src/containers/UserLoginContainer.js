import React, { Component } from 'react';
import UserCard from '../components/UserCard';
import UserLoginForm from './UserLoginForm';
import { connect } from 'react-redux'



class UserLoginContainer extends Component {

	renderUser = () => {

   
   return this.props.user.map(b => 
  	<UserCard 
  	name={b.name}
  	email={b.email}
  	key={b.id} 
  	user={b} />)
}


  render() {
  	debugger;
    return (
     	 <div>
     	   {this.renderUser()} 
        </div>
      
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })




export default connect(mapStateToProps )(UserLoginContainer)