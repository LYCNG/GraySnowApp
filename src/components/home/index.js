import React from 'react'
import {useEffect} from "react"
import {useSelector} from "react-redux"

import {useState} from "react";
import { useActions } from "../../hooks/useActions";
import logo from '../../logo.svg';
import Google from '../../assets/img/Google.svg.png';
import GA from '../../assets/img/ga.png';

function Home() {

    const theme = useSelector((state)=>state.theme)

    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{display:'flex'}}>
                <img src={Google} className="App-logo1" alt="logo" width="100" height="100" />
                <img src={GA} className="App-logo1" alt="logo" width="150" height="150" />
            </div>
            <h1 style={{color:theme==="Dark"?"white":"purple"}}>REACT TEST WITH GOOGLE ANALYTICS</h1>
            </header>
        </div>
    );
};

export default Home;