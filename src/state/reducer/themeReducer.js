const reducer =(state="Light",action)=>{
    switch(action.type){
        case "switch": //存錢
            switch(action.payload){
                case "Light":
                    return state = "Light";
                case "Dark":
                    return state = "Dark";
                default:
                    return state;
            };
        default:
            return state;
    };
};

export default reducer;