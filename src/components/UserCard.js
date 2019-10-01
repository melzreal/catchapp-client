import React from 'react';



const UserCard = ({ user }) => (


	<div key={user.id} className="User">
		 	<div>
			 	<h4> {user.name} </h4>
			 	
				
			   <br/>
			 </div>
	</div>

)





export default UserCard;