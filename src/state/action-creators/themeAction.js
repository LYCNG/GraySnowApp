import { ActionTypes } from "../action-types/index";

export const switchMode = (theme)=>{
    return (dispatch)=>{
        dispatch({ 
            type:ActionTypes.SET_THEME_SWITCH,
            theme:theme
        })
    }
}
