import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store

sagaMiddleware.run(rootSaga)