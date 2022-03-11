import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./ducks/auth";
import { todosReducer } from "./ducks/todos";

const rootReducer = combineReducers({ authReducer, todosReducer });

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
  )
);