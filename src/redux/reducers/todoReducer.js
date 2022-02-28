import * as actionTypes from '../actionTypes'

const initialState={
    todos: []
}

const todoReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.CREATE_TODO:
            return{
                ...state,
                todos : [...state.todos, action.payload]
            }
        case actionTypes.DELETE_TODO:
            return{
                ...state,
                todos : state.todos.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default todoReducer