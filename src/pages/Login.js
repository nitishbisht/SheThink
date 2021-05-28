import React,{useState} from "react";
import logo2 from '../logo2.svg'
import '../App.css';
const Login=(props)=>{

    const login={

            alignAll:"right",
            textAlign:"justify", 
            color:"yellow",
            fontWeight: "bold", 
            width:"30%",
            padding:"5% 5% 5% 5%",
            backgroundColor:"rgb(102, 153, 0)",
            fontFamily: "Arial",
            float:"right"
            
    }

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    return(
<div style={login}>
        <div style={{textAlign:"justify"}}>
        <span>Login<img src={logo2} className="App-logo2" alt="logo" /></span> 
        </div>  
        
        <div> 
           <span> User Name </span>
            <input  
                  type="text"
                  placeholder="user-id"
                  value={username}
                  
                 
            
            />
        </div>

        <div>
            Passward{' '}
             <input
                  type="text"
                  placeholder="passward"
                  value={password}
                  
            
            />
        </div>
        
        {error && <div className="error">{error}</div>}
        
            
        <div>
            
             <input
                  type="button"
                  value={loading?"loading..":"login"}
            
            />
        </div>

</div>

    )

}
export default Login