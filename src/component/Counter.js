import React,{Component} from "react"

const  UpdatedComponent=(OriginalComponent)=>{
class NewComponent extends Component {
    constructor(props){
        super(props)
        this.handleclick=this.handleclick.bind(this)
        this.state={
            count:0
        }
    }
    handleclick(){

        this.setState(
            prevState => {return{count: prevState.count+1}}
    )
    }
    render(){
        return <OriginalComponent name ="Nitish" count={this.state.count}  handleclick={this.handleclick}/>
    }


}
return NewComponent



}
export default UpdatedComponent