import { takeLatest, all, call, put } from "redux-saga/effects"
import * as actionTypes from '../actionTypes'
import {fetchProductsData} from '../api'

function* fetchProducts(){
    try{
        const res = yield call(fetchProductsData)
        yield put({
            type: actionTypes.FETCH_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }catch(error){
        yield put({
            type: actionTypes.FETCH_PRODUCTS_FAIL,
            payload:error.message
        })

    }
}


export default function* productsSga(){
    yield all([
        takeLatest(actionTypes.FETCH_PRODUCTS_REQUEST, fetchProducts)
    ])
}