import { all } from 'redux-saga/effects'

import token from '../reducers/token/sagas'
import album from '../reducers/album/sagas'

export default function* sagas() {
  return yield all([token, album])
}
