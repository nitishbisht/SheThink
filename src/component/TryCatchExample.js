
import React from "react"

function TryCatchExample ()
{
let errors=[];
try{

    var name ="hello";
    name ="bello bello"
    console.logs(name);
    

}
catch(err){
console.log(err);
errors=err;
}
 return(
<div>
{`error is ${errors} and name is ${name}`}
  </div>
    )



}
export default TryCatchExample