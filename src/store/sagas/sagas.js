import { all } from 'redux-saga/effects'
import auth from '../reducers/auth/sagas'
import album from '../reducers/album/sagas'
import songs from '../reducers/songs/sagas'
import sound from '../reducers/sound/sagas'

export default function* sagas() {
  return yield all([auth, album, songs, sound])
}
