import { ActionTypes } from "../action-types";

const reducer =(state="Light",action)=>{
    switch(action.type){
        case ActionTypes.SET_THEME_SWITCH:
            return state = action.theme
        default:
            return state
    };
};

export default reducer;