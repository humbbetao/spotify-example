import { all } from 'redux-saga/effects'

import token from '../reducers/token/sagas'
import search from '../reducers/search/sagas'

export default function* sagas() {
  return yield all([token, search])
}
