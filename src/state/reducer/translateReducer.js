import { ActionTypes } from "../action-types";

const reducer =(state="en",action)=>{
    switch(action.type){
        case ActionTypes.SET_TOPIC_LANGUAGE:
            return state = action.language
        default:
            return state;
    }
};

export default reducer;