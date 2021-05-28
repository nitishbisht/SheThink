
import React from "react"

function TryCatchExample ()
{
let errors;
try{
    //console.log(name); variable hosting
    var name ="hello";
    name ="bello bello";
    console.logs(name);// here is the error of wrong function
    }
catch(err)
{
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