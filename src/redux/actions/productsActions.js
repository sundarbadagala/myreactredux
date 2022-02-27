import * as actionTypes from '../actionTypes'

export const fetchProductsRequest=()=>{
    return{
        type: actionTypes.FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess=(data)=>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchProductsFail=(error)=>{
    return{
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        payload: error
    }
}