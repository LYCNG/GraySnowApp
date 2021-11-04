import React from 'react'
import {useSelector,useDispatch} from "react-redux"

import {useState} from "react";
import { useActions } from "../../hooks/useActions";
import logo from '../../logo.svg';

function Home() {

    const account = useSelector((state)=>state.account);
    const {depositMoney,withdrawMoney} = useActions ();
    const [size,setSize] = useState({width:500,height:500});
    const [money,setMoney] = useState(0);

    const handleSize=(type)=>{
        const {width,height} = size;
        switch(type) {
            case "big":
                setSize({
                    width:width*1.2,
                    height:height*1.2
                });
                return
            case "small":
                setSize({
                    width:width*0.8,
                    height:height*0.8
                });
                return
            default:
                return size
            }
    };
    
    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" style={{width:size.width,height:size.height}} />
            <p> 你現在有: {account}錢</p>
            <input type="number" value={money} onChange={(e)=>{setMoney(parseInt(e.target.value))}}/>
            <button onClick={()=>depositMoney(money)}>存款</button>
            <button onClick={()=>withdrawMoney(money)}>領款</button>
            <button onClick={()=>withdrawMoney(account)}>全領</button>
            <button onClick={()=>handleSize("big")}>放大</button>
            <button onClick={()=>handleSize("small")}>縮小</button>
            </header>
        </div>
    )
}

export default Home