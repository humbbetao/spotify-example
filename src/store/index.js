import { createStore, combineReducers } from 'redux'
import token from './reducers/token'
import browser from './reducers/browser'
import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
import sagas from './sagas'

const reducers = combineReducers({ token, browser })

const store = createStore(reducers, enhancer)

sagaMiddleware.run(sagas)

export default store
