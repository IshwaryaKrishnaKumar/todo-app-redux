import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos, getCompletedTodos } from "../api";
import { getTodos, isTodosLoading, loadTodos } from "../ducks/todos";
import TodoList from "./TodoList";

const CompletedTodods = () => {
  const todos = useSelector(getTodos);
  const loading = useSelector(isTodosLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos("completed"));
  }, []);

  return <TodoList todos={todos} loading={loading} />;
};

export default CompletedTodods;