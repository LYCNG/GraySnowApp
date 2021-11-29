import { ActionTypes } from "../action-types";

const  INIT_STATE ={
    auth:false,
    username:null,
    token:"",
    error_message:"",
    avatar:""
}

const reducer = (state = INIT_STATE,action)=>{
    switch(action.type){
        case ActionTypes.SET_USER_LOGIN_SUCCESS: //登入確認
            return {
                ...state,
                auth: true,
                username: action.username,
                avatar:"https://upload.wikimedia.org/wikipedia/zh/e/e5/Gawr_Gura.png",
                templateToken:action.templateToken
            }
        case ActionTypes.SET_USER_LOGOUT: //取消登入
            return {
                ...INIT_STATE,
                auth:false,
            };
            
        case ActionTypes.SET_USER_LOGIN_ERROR_MESSAGE:
            return {
                ...state,
                error_message:action.error_message
            }
        case ActionTypes.CLEAN_LOGIN_ERROR_MESSAGE:
            return {
                ...state,
                error:""
            }
        default:
            return state;
    };
};

export default reducer;