import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../api";
import { getTodos, isTodosLoading, loadTodos } from "../ducks/todos";
import TodoList from "./TodoList";

const AllTodos = () => {
  const todos = useSelector(getTodos);
  const loading = useSelector(isTodosLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos("all"));
  }, []);

  return <TodoList todos={todos} loading={loading} />;
};

export default AllTodos;