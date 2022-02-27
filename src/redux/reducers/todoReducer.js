import * as actionTypes from '../actionTypes'

const initialState={
    todos: []
}

const todoReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.CREATE_TODO_SUCCESS:
            return{
                ...state,
                todos : [...state.todos, action.payload.payload]
            }
        case actionTypes.DELETE_TODO_SUCCESS:
            return{
                ...state,
                todos : state.todos.filter(item => item.id !== action.payload.payload)
            }
        default:
            return state
    }
}

export default todoReducer