import * as actionTypes from '../actionTypes'

export const createTodo=(payload)=>{
    return{
        type : actionTypes.CREATE_TODO,
        payload: payload
    }
}

export const deleteTodo=(todo)=>{
    return{
        type: actionTypes.DELETE_TODO,
        payload: todo
    }
}