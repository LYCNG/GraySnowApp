import {combineReducers} from "redux"; //use to combine reducers
import accountReducer from './accountReducer';
import translateReducer from './translateReducer';
import themeReducer from './themeReducer';
import authReducer from './authReducer';
//combineReducers:將reducer結合，可以將state分類呈不同的reducer然後統一包裝。
const reducers= combineReducers({
    account:accountReducer,
    language:translateReducer,
    theme:themeReducer,
    auth:authReducer

});

export default reducers;