import React from 'react'
import {useEffect} from "react"
import {useSelector} from "react-redux"
import TrackPage from '../../hooks/useTracker'
import logo from '../../logo.svg';
import Google from '../../assets/img/Google.svg.png';
import GA from '../../assets/img/ga.png';
import {useLocation} from 'react-router-dom'


function Home() {
    let location = useLocation();
    const theme = useSelector((state)=>state.theme);
    
    useEffect(()=>{
        TrackPage(location.pathname)
    },[location])

    return (
        <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{display:'flex'}}>
                <img src={Google} className="App-logo1" alt="logo" width="100" height="100" />
                <img src={GA} className="App-logo1" alt="logo" width="150" height="150" />
            </div>
            <h1 style={{color:theme==="Dark"?"aqua":"purple"}}>REACT TEST WITH GOOGLE ANALYTICS</h1>
            </header>
        </div>
    );
};

export default Home;