import React from "react"

function Footer(){

	const Day2 = () => {return(<h1>"hello this is an arrow function"</h1>)}
	
    // to find the length of the object
	var name={ firstName:"", lastName:"",middleName:""}
	var size = Object.keys(name).length;
	

	
return(

<div> 
<footer className="Footer">hello world this is footer{size} <Day2/> </footer>

</div>
	)


}
export default Footer