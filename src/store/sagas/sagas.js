import { all } from 'redux-saga/effects'
import token from '../reducers/token/sagas'
import album from '../reducers/album/sagas'
import songs from '../reducers/songs/sagas'

export default function* sagas() {
  return yield all([token, album, songs])
}
