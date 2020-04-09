import { createStore, combineReducers } from 'redux'
import spotify from './reducers/spotify'
import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
import sagas from './sagas'

const reducers = combineReducers({ spotify })

const store = createStore(reducers, enhancer)

sagaMiddleware.run(sagas)

export default store
