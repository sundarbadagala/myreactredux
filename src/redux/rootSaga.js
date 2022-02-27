import {spawn} from 'redux-saga/effects'

import countSaga from './sagas/counterSaga'
import todoSaga from './sagas/todoSaga'
import productsSga from './sagas/productsSaga'

export default function* rootSaga() {
    yield spawn(countSaga)
    yield spawn(todoSaga)
    yield spawn(productsSga)
  }