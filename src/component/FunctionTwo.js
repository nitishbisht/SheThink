import React from "react"

function FunctionTwo()
{

    let grade="B";
    let value;

switch(grade) {
   case "A": {
      value="Excellent";
      break;
   }
   case "B": {
      value="Good";
      break;
   }
   case "C": {
      value="Fair";
      break;
   }
   case "D": {
      value="Poor";
      break;
   }
   default: {
    value="Invalid choice";
      break;
   }
}

//for loop
let values= [10, 32, 23];
let val =  0 ;
let index = values.findIndex(
   rank => rank === 23 );

for (const i of values) {
    val+=i;
    console.log(val);
}


    return(
    <div>
     <p>you got {value} grade</p>
     <p>sum is {val} and index of 23 is {index}</p>
    </div>
    )

}
export default FunctionTwo