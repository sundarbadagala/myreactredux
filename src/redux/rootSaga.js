import {spawn} from 'redux-saga/effects'
import productsSga from './sagas/productsSaga'

export default function* rootSaga() {
    yield spawn(productsSga)
  }