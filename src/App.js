import logo from './logo.svg';
import './App.css';
import Header from'./component/Header.js'
import MainFunction from'./component/MainFunction.js'
import FunctionTwo from'./component/FunctionTwo.js'
import FetchFunction from './component/FetchFunction.js'
import TryCatchExample from './component/TryCatchExample.js'
function App() {
  return (
    <div className="App">
     
     <Header/>
     <MainFunction />
     <img src={logo} className="App-logo" alt="logo" />
     <FunctionTwo />
     <FetchFunction/>
     <TryCatchExample/>
    </div>
  );
}

export default App;