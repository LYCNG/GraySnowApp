import React from 'react'
import {useEffect} from "react"
import {useSelector} from "react-redux"

import {useState} from "react";
import { useActions } from "../../hooks/useActions";
import logo from '../../logo.svg';

function Home() {

    const account = useSelector((state)=>state.account);
    const theme = useSelector((state)=>state.theme)

    const {depositMoney,withdrawMoney} = useActions ();
    
    const [money,setMoney] = useState(0);
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{color:theme==="Dark"?"white":"black"}}> 你現在有: {account}錢</p>
            <input type="number" value={money} onChange={(e)=>{setMoney(parseInt(e.target.value))}}/>
            <button onClick={()=>depositMoney(money)}>存款</button>
            <button onClick={()=>withdrawMoney(money)}>領款</button>
            <button onClick={()=>withdrawMoney(account)}>全領</button>
            </header>
        </div>
    );
};

export default Home;