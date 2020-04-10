import { all, takeLatest, put } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import ActionsCreators from './actionCreators'
function* getToken() {
 
}

export default all([takeLatest(ActionTypes.GET_TOKEN, getToken)])
