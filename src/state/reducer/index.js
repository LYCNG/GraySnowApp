import {combineReducers} from "redux" //use to combine reducers
import accountReducer from './accountReducer'
import translateReducer from './translateReducer'

const reducers= combineReducers({
    account:accountReducer,
    language:translateReducer,
});

export default reducers;