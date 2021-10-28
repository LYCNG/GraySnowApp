const initState ={
    auth:false,
    username:null
}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case "set_auth": //登入確認
            return state = action.payload;
        case "remove_auth": //取消登入
            return state = initState;
        default:
            return state;
    };
};

export default reducer;