import React from 'react'
import cheerio from 'cheerio';
import request from "request";
import axios from "axios";
function News() {
    let holo = "https://en.hololive.tv/r/v1/sites/13421518/ecommerce";
    let test = "http://192.168.0.16:3031/api/EquSetting/worktime"
    const getUrlToJson = async()=>{
        try{
            const response = await axios.get(holo,{
                mode:"cors",
                headers:{
                    // 'Access-Control-Allow-Origin':'*',
                    // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
                    // 'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                },proxy: {
                    protocol: 'https',
                    host: 'en.hololive.tv',
                    // port: 8080,
    
                  },
            });
            console.log(response);
        }catch(err){
            console.log(err)
        }
    }
    getUrlToJson()
    return (
        <div>
            <h1 style={{ color: 'white' }}>news here?</h1>
        </div>
    )
}

export default News
