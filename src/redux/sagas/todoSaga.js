import {takeLatest, put, all} from 'redux-saga/effects'
import * as actionTypes from '../actionTypes'

function* createTodo(payload){
    yield put({
        type: actionTypes.CREATE_TODO_SUCCESS,
        payload
    })
}

function* deleteTodo(payload){
    yield put({
        type: actionTypes.DELETE_TODO_SUCCESS,
        payload
    })
}

export default function* todoSaga(){
    yield all([
        takeLatest(actionTypes.CREATE_TODO, createTodo),
        takeLatest(actionTypes.DELETE_TODO, deleteTodo)
    ])

}