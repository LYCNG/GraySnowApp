import {createStore,applyMiddleware} from 'redux'
import reducers from './reducer/index'
import thunk from 'redux-thunk'//thunk 讓function去包裝另一個function的並呼叫的概念
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',//can change
    storage: storage,
    stateReconciler: autoMergeLevel2 // 檢視 'Merge Process' 部分的具體情況
};

const myPersistReducer = persistReducer(persistConfig, reducers);
const store = createStore(
    // reducers,
    // {},
    myPersistReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
export default store;