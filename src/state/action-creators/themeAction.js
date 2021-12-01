import { ActionTypes } from "../action-types/index";

export const switchMode = (theme)=>{
    return (dispatch)=>{
        dispatch({ 
            type:ActionTypes.SET_THEME_SWITCH,
            theme:theme
        })
    };
};

export const setThemeDark = ()=>{
    return (dispatch)=>{
        dispatch({ 
            type:ActionTypes.SET_THEME_DARK
        })
    };
};

export const setThemeLight = ()=>{
    return (dispatch)=>{
        dispatch({ 
            type:ActionTypes.SET_THEME_LIGHT
        })
    };
};

