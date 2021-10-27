const reducer =(state="English",action)=>{
    switch(action.type){
        case "translate":
            switch(action.payload){
                case "en":
                    return state = "English";
                case "zh-TW":
                    return state = "繁體中文"
                case "zh-CN":
                    return state = "简体中文"
                case "jp":
                    return state = "日本語"
                default:
                    return "English"
            }
        default:
            return state;
    }
};

export default reducer;