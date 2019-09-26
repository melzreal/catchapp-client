import React from 'react';
import './CatchFriends.css';



const CatchFriends = (props) => (

 
	<div> 
		<h3> Friends To Catch Up with </h3>
		
		 {props.friends.map(f => 
		 	<div key ={f.id} className="Catch">
		 	<div>
			 	<h4> {f.name} </h4>
			 	<h4> {f.contact} </h4>
			  <input type="checkbox" checked={props.reached_out} />
			  <br/>
		    </div>
		    </div>
		)}
		
	</div>
	
);

export default CatchFriends;