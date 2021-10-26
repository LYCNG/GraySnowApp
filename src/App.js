import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {bindActionCreators} from "redux";
import {actionCreator} from "./state/index"
import {useState} from "react";
function App() {

  const account = useSelector((state)=>state.account);
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreator,dispatch);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p> 你現在有: {account}錢</p>
          <input type="number"  />
        <button onClick={()=>depositMoney(1000)}>存款</button>
        <button onClick={()=>withdrawMoney(1000)}>領款</button>
      </header>
    </div>
  );
}

export default App;
