import { all } from 'redux-saga/effects'

import token from '../reducers/token/sagas'
import browser from '../reducers/browser/sagas'

export default function* sagas() {
  return yield all([token, browser])
}
