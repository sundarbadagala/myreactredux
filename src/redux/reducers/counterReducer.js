import * as actionTypes from '../actionTypes'

const initialState={
    count:0
}

const counterReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.COUNT_INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case actionTypes.COUNT_DECREMENT:
            return{
                ...state,
                count : state.count - 1
            }
        case actionTypes.COUNT_INCREMENT_NUMBER:
            return{
                ...state,
                count: state.count + Number(action.payload)
            }
        case actionTypes.COUNT_DECREMENT_NUMBER:
            return{
                ...state,
                count: state.count - Number(action.payload)
            }
        default:
            return state
    }
}

export default counterReducer