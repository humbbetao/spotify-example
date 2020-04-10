import { all, takeLatest } from 'redux-saga/effects';
import ActionTypes from './actionTypes';

function* getTest() {
  yield 'works';
}

export default all([takeLatest(ActionTypes.TEST, getTest)]);
