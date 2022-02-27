import * as actionTypes from '../actionTypes'

export const counIncement=()=>{
    return{
        type: actionTypes.COUNT_INCREMENT
    }
}

export const countDecrement=()=>{
    return{
        type: actionTypes.COUNT_DECREMENT
    }
}

export const countIncrementNumber=(number)=>{
    return{
        type: actionTypes.COUNT_INCREMENT_NUMBER,
        payload: number
    }
}

export const countDecrementNumber=(number)=>{
    return{
        type: actionTypes.COUNT_DECREMENT_NUMBER,
        payload: number
    }
}