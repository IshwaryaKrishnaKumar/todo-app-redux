import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos, getUncompletedTodos } from "../api";
import { getTodos, isTodosLoading, loadTodos } from "../ducks/todos";
import TodoList from "./TodoList";

const UncompletedTodos = () => {
  const todos = useSelector(getTodos);
  const loading = useSelector(isTodosLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos("all"));
  }, []);

  return <TodoList todos={todos} loading={loading} />;
};

export default UncompletedTodos;