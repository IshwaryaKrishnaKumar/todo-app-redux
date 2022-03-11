
import { combineReducers } from "redux";
import { getAllTodos, getCompletedTodos, getUncompletedTodos } from "../api";
import { getToken } from "./auth";

const LOAD_TODOS_LOADING = "LOAD_TODOS_LOADING";
const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
const SET_TODOS_VISIBLE = "SET_TODOS_VISIBLE";


function todos(state = [], action) {
  switch (action.type) {
    case LOAD_TODOS_SUCCESS:
      return action.data;
    case LOAD_TODOS_LOADING:
    case LOAD_TODOS_FAILURE:
      return [];
    default:
      return state;
  }
}

function todosVisible(state = "all", action) {
  switch (action.type) {
    case SET_TODOS_VISIBLE:
      return action.data;
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_TODOS_LOADING:
      return true;
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_SUCCESS:
      return false;
    default:
      return state;
  }
}

export const todosReducer = combineReducers({ todos, todosVisible, loading });


const todosSuccess = (data) => ({
  type: LOAD_TODOS_SUCCESS,
  data,
});

const todosFailure = (error) => ({
  type: LOAD_TODOS_FAILURE,
  error,
});

const todosLoading = () => ({
  type: LOAD_TODOS_LOADING,
});

const setTodosVisible = (data) => ({
  type: SET_TODOS_VISIBLE,
  data,
});


export const getTodosVisibility = (state) => state.todosReducer.todosVisible;
export const getTodos = (state) => state.todosReducer.todos;
export const isTodosLoading = (state) => state.todosReducer.loading;


export const loadTodos = (visibility) => (dispatch, getState) => {
  dispatch(setTodosVisible(visibility));
  dispatch(todosLoading());
  let token = getToken(getState());
  let apiCall = null;
  if (visibility === "uncompleted") {
    apiCall = getUncompletedTodos(token);
  } else if (visibility === "completed") {
    apiCall = getCompletedTodos(token);
  } else {
    apiCall = getAllTodos(token);
  }
  apiCall
    .then((resp) => dispatch(todosSuccess(resp.data)))
    .catch((e) => dispatch(todosFailure(e)));
};