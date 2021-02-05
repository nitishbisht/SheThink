import React from "react"
function Header(){

	//console.table(["apples", "oranges", "bananas"]);
//alert() function

const ClickFunction=()=>alert("alert demo");

	
	return(

<div className="App-header">

<p>hello world my change</p>
<button onClick={ClickFunction}>click here</button>

</div>
	)


}
export default Header