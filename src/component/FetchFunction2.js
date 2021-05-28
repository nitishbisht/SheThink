import React, {Component} from "react"
class FetchFunction extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {},
          
        }
        
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    loading: false,
                    character: data
                    
                })
              
                
            })
            
    }
    
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.content
        const text2 = this.state.loading ? "loading..." : this.state.character.id
    

        return (
            <div>
                <p>this is a fetch demo </p>
                <p>id: {text2} </p> 
                <p>text: {text}</p>
                


            </div>
        )
    }
}

export default FetchFunction