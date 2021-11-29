
import { ActionTypes } from "../action-types/index";

export const translate = (language)=>{
    return (dispatch)=>{
        dispatch({ 
            type:ActionTypes.SET_TOPIC_LANGUAGE,
            language:language
        })
    }
}