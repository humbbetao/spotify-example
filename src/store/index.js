import { createStore, combineReducers } from 'redux'
import auth from './reducers/auth'
import album from './reducers/album'
import songs from './reducers/songs'
import sound from './reducers/sound'

import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
import sagas from './sagas'

const reducers = combineReducers({ auth, album, songs, sound })

const store = createStore(reducers, enhancer)

sagaMiddleware.run(sagas)

export default store
