import React,{Component} from "react"

class Test1 extends Component
{
    constructor(){
        super()
        this.TestX=this.TestX.bind(this)
        
    }

      TestX(){

        const Day2 = () => {return(<h1>"hello this is an arrow function"</h1>)}
        
        // to find the length of the object
        var name={ firstName:"", lastName:"",middleName:""}
        var size = Object.keys(name).length;
    
        const FunctionTest1 = () => { return (<h2>"inside functiontest1"</h2>)}
    
        
    return(
    
    <div> 
    <footer className="Footer">size of an object = {size}<Day2/><FunctionTest1 /> </footer>
    
    
    
    </div>
        )
    }    
  
    
render(){



    return(
    <div>
    {this.TestX}
    </div>
    )

} }
export default Test1
