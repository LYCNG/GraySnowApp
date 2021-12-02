//auth is Object {auth:Boolean,user:String}
import axios from "axios";
// import { Dispatch } from "redux";//for ts
import { ActionTypes } from "../action-types/index";

const user = {
    "gura":{
        password:"gura123",
        avatar:"https://upload.wikimedia.org/wikipedia/zh/e/e5/Gawr_Gura.png"
    },
    "ina":{
        password:"ina123",
        avatar:"https://pbs.twimg.com/profile_images/1339283318848716801/_zU72OLZ_400x400.jpg"
    },
    "ame":{
        password:"ame123",
        avatar:"https://memeprod.ap-south-1.linodeobjects.com/user-template/26403099e9cd2972e4275637ec865f0f.png"
    }

};

const authDemo=(username,password)=>{
    console.log(username)
    return new Promise(( resolve, reject) =>{
        if(password!==user[username].password){
            reject(new Error("login failed"))
        }
        resolve({
            username: username,
            avatar:user[username].avatar,
            token: username+password
        });
    });
};

export const login = (
    username,password
    ) => async(dispatch) =>{
        try{
            // const res = axios.post()
            const data = await authDemo(username,password);
            if(data) return dispatch({ 
                type:ActionTypes.SET_USER_LOGIN_SUCCESS,
                username:data.username,
                avatar:data.avatar,
                token:data.token
            });
        }catch(err){
            dispatch({ 
                type:ActionTypes.SET_USER_LOGIN_FAILED
            })
            dispatch({
                type: ActionTypes.SET_USER_LOGIN_ERROR_MESSAGE,
                error_message: "login failed",
            });
        };
};

export const cleanError = ()=>({
    type: ActionTypes.CLEAN_LOGIN_ERROR_MESSAGE
});

export const logout=()=>({
    type:ActionTypes.SET_USER_LOGOUT
});
