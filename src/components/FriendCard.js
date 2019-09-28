import React from 'react';


// const handleChange = () => {
//   const reached = this.state.reached_out;
//   this.setState({reached_out: !reached});

// }

//onClick={this.handleChange()}


const FriendCard = ({ friend }) => (



	<div key={friend.id} className="Catch">
		 	<div>
			 	<h4> {friend.friendname} </h4>
			 	<h4> {friend.contact} </h4>
				<input type="checkbox" />
			   <br/>
			 </div>
	</div>

)





export default FriendCard;