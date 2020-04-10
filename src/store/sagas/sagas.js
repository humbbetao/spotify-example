import { all } from 'redux-saga/effects'

import token from '../reducers/token/sagas'
import userActions from '../reducers/userActions/sagas'

export default function* sagas() {
  return yield all([token, userActions])
}
