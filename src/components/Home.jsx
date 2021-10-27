import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {bindActionCreators} from "redux";
import {actionCreator} from "../state/index"
import {useState} from "react";
import logo from '../logo.svg';

function Home() {

    const account = useSelector((state)=>state.account);
    const dispatch = useDispatch();
    const {depositMoney,withdrawMoney} = bindActionCreators(actionCreator,dispatch);

    const [money,setMoney] = useState(0);

    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p> 你現在有: {account}錢</p>
            <input type="number" value={money} onChange={(e)=>{setMoney(parseInt(e.target.value))}}/>
            <button onClick={()=>depositMoney(money)}>存款</button>
            <button onClick={()=>withdrawMoney(money)}>領款</button>
            <button onClick={()=>withdrawMoney(account)}>全領</button>
            </header>
        </div>
    )
}

export default Home
