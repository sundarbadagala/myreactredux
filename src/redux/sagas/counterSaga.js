import * as actionTypes from '../actionTypes'
import {put, all, takeLatest} from 'redux-saga/effects'

function* countIncrement(){
    yield put({
        type: actionTypes.COUNT_INCREMENT_SUCCESS
    })
}

function* countDecrement(){
    yield put({
        type: actionTypes.COUNT_DECREMENT_SUCCESS
    })
}

function* countIncrementNumber(payload){
    yield put({
        type: actionTypes.COUNT_INCREMENT_NUMBER_SUCCESS,
        payload
    })
}

function* countDecrementNumber(payload){
    yield put({
        type: actionTypes.COUNT_DECREMENT_NUMBER_SUCCESS,
        payload
    })
}

export default function* countSaga(){
    yield all([
        takeLatest(actionTypes.COUNT_INCREMENT, countIncrement),
        takeLatest(actionTypes.COUNT_DECREMENT, countDecrement),
        takeLatest(actionTypes.COUNT_INCREMENT_NUMBER, countIncrementNumber),
        takeLatest(actionTypes.COUNT_DECREMENT_NUMBER, countDecrementNumber)
    ])
}