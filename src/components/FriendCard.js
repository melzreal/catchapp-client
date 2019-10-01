import React from 'react';



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