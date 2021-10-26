const reducer =(state="zh-tw",action)=>{
    switch(action.type){
        case "translate":
            return  state = action.payload
        default:
            return state;
    }
};

export default reducer;