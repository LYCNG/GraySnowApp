const initState ={
    auth:false,
    username:null,
    templateToken:"",
    error:"",
    avatar:""
}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS": //登入確認
            return {
                ...state,
                auth: true,
                username: action.username,
                avatar:"https://upload.wikimedia.org/wikipedia/zh/e/e5/Gawr_Gura.png",
                templateToken:action.templateToken
            }
        case "LOGOUT": //取消登入
            return {...initState};
        case "LOGIN_ERROR":
            return {
                ...state,
                error:action.error
            }
        case "CLEAN_ERROR":
            
            return {
                ...state,
                error:""
            }
        default:
            return state;
    };
};

export default reducer;