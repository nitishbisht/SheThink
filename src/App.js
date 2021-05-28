import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import './App.css';
import FetchFunction from './component/FetchFunction.js';
import FetchFunction2 from './component/FetchFunction2.js';
import Footer from './component/Footer.js';
import FunctionTwo from './component/FunctionTwo.js';
import Header from './component/Header.js';
import MainFunction from './component/MainFunction.js';
import TryCatchExample from './component/TryCatchExample.js';
import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import Home from "./pages/Home";
import Login from './pages/Login';
import Test1 from "./component/Test1";
import ClickButtton from "./component/ClickButtton";
import MouseHover from "./component/MouseHover";
import Rough from "./component/Rough";
import PromiseExample from "./component/PromisesExample";


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
           <NavLink exact activeClassName="active" to="/home">Home</NavLink> 
           <NavLink exact activeClassName="active" to="/dashboard">Dashboad</NavLink> 
           <NavLink exact activeClassName="active" to="/login">Login</NavLink> 
           
           <Link exact to="/">Contact-us</Link> 
        </div>
        <Switch>
              <Route exact path="/home" component={Home} />  
              <Route exact path="/dashboard" component={Dashboard} /> 
              
              <Route exact path="/login" component={Login} /> 
              
              
        </Switch>
        </BrowserRouter>
      
     <Header/>
     <MainFunction />
     <Footer/>
     <img src={logo} className="App-logo" alt="logo2" />
     <FunctionTwo />
     <FetchFunction/>
     <FetchFunction2/>
     <TryCatchExample/>
     <Test1 />
     <ClickButtton/>
     <MouseHover/>
     <Rough/>
     <PromiseExample/>
     
     </div>
  );
}

export default App;