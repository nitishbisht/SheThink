import React,{Component} from "react"
import Counter from "./Counter"
 
class Hover extends Component{

    render(){
    const{count,handleclick}=this.props
    
    return(
    
        <h1 onMouseOver={handleclick}> Hovered  {count}times</h1>
    )
    
    }
    
    
    
    }export default Counter(Hover)