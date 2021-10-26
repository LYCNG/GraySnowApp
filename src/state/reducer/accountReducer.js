const reducer =(state=0,action)=>{
    switch(action.type){
        case "deposit": //存錢
            return state + action.payload;
        case "withdraw"://領款
            return state-action.payload;
        default:
            return state;
    }
};

export default reducer;