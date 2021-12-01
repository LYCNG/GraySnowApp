import { ActionTypes } from "../action-types";



const DARK_STATE={
    theme:"#282c34",
    sideBar:"#4B4B4B",
    navbar:"#1D1B8C"
};
const LIGHT_STATE ={
    theme:"#F3F3F3",
    sideBar:"",
    navbar:""
};

const reducer =(state="Light",action)=>{
    switch(action.type){
        case ActionTypes.SET_THEME_SWITCH:
            return state = action.theme
        case ActionTypes.SET_THEME_DARK:
            return state = {...DARK_STATE};
        case ActionTypes.SET_THEME_LIGHT:
            return state = {...LIGHT_STATE};
        default:
            return state
    };
};

export default reducer;