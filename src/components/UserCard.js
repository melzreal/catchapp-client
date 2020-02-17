import React from 'react';



const UserCard = props => (


	<div key={props.id} className="Catch">
		 	<div>
			 	<h4> {props.name} </h4>
			 	<h4> {props.email} </h4>
			
			   <br/>
			 </div>
	</div>

)





export default UserCard;


