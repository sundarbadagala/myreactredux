import * as actionTypes from '../actionTypes'

const initialState={
    count:0
}

const counterReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.COUNT_INCREMENT_SUCCESS:
            return{
                ...state,
                count: state.count + 1
            }
        case actionTypes.COUNT_DECREMENT_SUCCESS:
            return{
                ...state,
                count : state.count - 1
            }
        case actionTypes.COUNT_INCREMENT_NUMBER_SUCCESS:
            return{
                ...state,
                count: state.count + Number(action.payload.payload)
            }
        case actionTypes.COUNT_DECREMENT_NUMBER_SUCCESS:
            return{
                ...state,
                count: state.count - Number(action.payload.payload)
            }
        default:
            return state
    }
}

export default counterReducer