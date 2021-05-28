import React,{Component} from "react"
import Counter from "./Counter"

class Button extends Component{
// this is an example of HOC
render(){
const { count,handleclick }=this.props// Object destructuring

return(

    <button onClick={handleclick}> clicked{count}  times</button>
)

}}


export default Counter(Button)