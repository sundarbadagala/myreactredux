import { combineReducers } from "redux";
import counterReducer from './reducers/counterReducer'
import todoReducer from "./reducers/todoReducer";
import productsReducer from './reducers/productsReducer'

const rootReducer = combineReducers({
    count: counterReducer,
    todos: todoReducer,
    products : productsReducer
})

export default rootReducer