import {createStore,applyMiddleware} from 'redux'
import reducers from './reducer/index'
import thunk from 'redux-thunk'//thunk 讓function去包裝另一個function的並呼叫的概念
import {persistStore, persistReducer} from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import logger from "redux-logger";

const persistConfig = {
    key: 'temp-root',//can change
    storage: localStorage,
    stateReconciler: autoMergeLevel2, // 檢視 'Merge Process' 部分的具體情況
    timeout:null,
};

const myPersistReducer = persistReducer(persistConfig, reducers);
const store = createStore(
    // reducers,
    // {},
    myPersistReducer,
    applyMiddleware(thunk,logger)
);

export const persistor = persistStore(store);
export default store;
