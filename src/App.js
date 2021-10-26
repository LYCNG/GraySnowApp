import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {bindActionCreators} from "redux";
import {actionCreator} from "./state/index"
import {useState} from "react";
import TopBar from "./components/TopBar"

function App() {

  const account = useSelector((state)=>state.account);
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreator,dispatch);

  const [money,setMoney] = useState(0);

  return (
    <div className="App">
      <TopBar /> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p> 你現在有: {account}錢</p>
          <input type="number" value={money} onChange={(e)=>{setMoney(parseInt(e.target.value))}}/>
        <button onClick={()=>depositMoney(money)}>存款</button>
        <button onClick={()=>withdrawMoney(money)}>領款</button>
      </header>
    </div>
  );
}

export default App;
