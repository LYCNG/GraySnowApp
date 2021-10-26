import {createStore,applyMiddleware} from 'redux'
import reducers from './reducer/index'
import thunk from 'redux-thunk'//thunk 讓function去包裝另一個function的並呼叫的概念
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)