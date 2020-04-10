import { createStore, combineReducers } from 'redux'
import token from './reducers/token'
import userActions from './reducers/userActions'
import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
import sagas from './sagas'

const reducers = combineReducers({ token, userActions })

const store = createStore(reducers, enhancer)

sagaMiddleware.run(sagas)

export default store
