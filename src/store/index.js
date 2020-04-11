import { createStore, combineReducers } from 'redux'
import token from './reducers/token'
import search from './reducers/search'
import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
import sagas from './sagas'

const reducers = combineReducers({ token, search })

const store = createStore(reducers, enhancer)

sagaMiddleware.run(sagas)

export default store
