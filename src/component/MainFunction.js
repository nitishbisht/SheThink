import React from "react"
function Mainfunction(){
//const	
	const example = [];
	example.push(5,20,14,32);
    example[0]=10;// we can change arrays value but 
    //example= 23;  // this time we can't change the value of primitive type eample is define as array
	console.log(example);
	
//let	
	let times = 4;
	let hello ="welcome to the new era";
 
	if (times > 3) {
		 let hello = "say Hello instead";
		 console.log(hello);// "o/p=say Hello instead"
	 }
	<p>{hello}</p> // o/p= hi **instances are treated as different variables since they have different scopes**
//var	
	function newFunction() {
		var hello = "hello world";
		//var hello="hey man whats up" // we can't redeclare var variable
		console.log(hello);   
		
    }
    //console.log(hello); we cant't use hello varible outside the scope of function
	return(

<div className="App">

<p>Welcome to SheThink world {hello} </p>
{newFunction}
</div>
	)


}
export default Mainfunction