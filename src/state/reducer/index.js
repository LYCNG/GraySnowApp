import {combineReducers} from "redux" //use to combine reducers
import accountReducer from './accountReducer'

const reducers= combineReducers({
    account:accountReducer,
});

export default reducers;