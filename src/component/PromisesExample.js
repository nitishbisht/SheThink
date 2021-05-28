import React from "react"

function PromiseExample(){

var value
const Promises = ()=>{

return new Promise((resolve, reject) => {
    
setTimeout(()=>{
    const error= false
    if(error){
        reject('sorry error')
    } 
    else if(!error)
    {
        resolve('successfull')
    }

},2000)})


}
Promises()
    .then((sucess)=>{ value=sucess
        console.log(sucess)})
    .catch((fail)=>{
        value=fail
        console.log(fail)})
        console.log(value)

return (<div>
    <h1>promisExample</h1>
    </div>
    )


}
export default PromiseExample