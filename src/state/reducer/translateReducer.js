const reducer =(state="English",action)=>{
    switch(action.type){
        case "translate":
            switch(action.payload){
                case "en":
                    return state = "en";
                case "zh-TW":
                    return state = "zh-TW"
                case "zh-CN":
                    return state = "zh-CN"
                case "jp":
                    return state = "jp"
                default:
                    return "en"
            }
        default:
            return state;
    }
};

export default reducer;