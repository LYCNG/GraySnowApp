//auth is Object {auth:Boolean,user:String}
import axios from "axios";
// import { Dispatch } from "redux";//for ts
import { ActionTypes } from "../action-types/index";

const user={
    "gura":"test123"
};

const authDemo=(username,password)=>{
    if(password!==user[username])return false;
    return {
        username: username,
        token: username+password
    };
};

export const login =(
    username,password
    ) => async(dispatch) =>{
        try{
            // const res = axios.post()
            const data = authDemo(username,password);
            if(data) return dispatch({ 
                type:ActionTypes.SET_USER_LOGIN_SUCCESS,
                username:data.username,
                token:data.token
            })
            dispatch({ 
                type:ActionTypes.SET_USER_LOGIN_FAILED
            })
        }catch(err){
            dispatch({
                type: ActionTypes.SET_USER_LOGIN_ERROR_MESSAGE,
                error_message: "login failed",
            });
        }
};


export const cleanError = ()=>({
    type: ActionTypes.CLEAN_LOGIN_ERROR_MESSAGE
});


export const logout=()=>({
    type:ActionTypes.SET_USER_LOGOUT
});
