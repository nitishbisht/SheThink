import logo from './logo.svg';
import './App.css';
import Header from'./component/Header.js'
import MainFunction from'./component/MainFunction.js'
function App() {
  return (
    <div className="App">

    <Header/ >
     <img src={logo} className="App-logo" alt="logo" />
     <MainFunction />
    </div>
  );
}

export default App;