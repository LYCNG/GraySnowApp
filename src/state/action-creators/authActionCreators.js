//auth is Object {auth:Boolean,user:String}
import axios from "axios";
import { Dispatch } from "redux";//for ts

const authDemo=(username,password)=>{
    if(username==="admin"&&password==="test123"){
        let data={
            username: username,
            token: username+password
        }
        return data
    }
};

export const login =(username,password) => async(dispatch) =>{
    try{
        // const res = axios.post()
        const data = authDemo(username,password);
        dispatch({ 
            type:"LOGIN_SUCCESS",
            username:data.username,
            templateToken:data.token
        })
    }catch(err){
        console.log(err)
        dispatch({
            type: 'LOGIN_ERROR',
            error: "login failed",
          });
    }
};


export const cleanError = ()=>({
    type:"CLEAN_ERROR"
});


export const logout=()=>({
    type:"LOGOUT"
});
