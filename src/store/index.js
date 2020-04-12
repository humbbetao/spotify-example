import { createStore, combineReducers } from 'redux'
import token from './reducers/auth'
import album from './reducers/album'
import songs from './reducers/songs'

import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
import sagas from './sagas'

const reducers = combineReducers({ token, album, songs })

const store = createStore(reducers, enhancer)

sagaMiddleware.run(sagas)

export default store
