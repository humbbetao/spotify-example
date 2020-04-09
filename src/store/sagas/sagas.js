import { all } from 'redux-saga/effects'

import spotify from '../reducers/spotify/sagas'

export default function* sagas() {
  return yield all([spotify])
}
