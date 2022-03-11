import { Button, Container, Flex, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory, Switch } from "react-router-dom";
import { getAllTodos, getCompletedTodos, getUncompletedTodos } from "../api";
import AllTodos from "../components/AllTodos";
import CompletedTodos from "../components/CompletedTodos";
import Navbar from "../components/Navbar";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import UncompletedTodos from "../components/UncompletedTodos";
import { getToken } from "../ducks/auth";
import { getTodos, getTodosVisibility, loadTodos } from "../ducks/todos";

function HomePage(props) {
  const history = useHistory();
  const token = useSelector(getToken);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <Flex>
        <VStack alignItems={"stretch"}>
          <Button onClick={() => history.push("/")}>All</Button>
          <Button onClick={() => history.push("/completed")}>Completed</Button>
          <Button onClick={() => history.push("/uncompleted")}>
            Uncompleted
          </Button>
        </VStack>
        <Container maxW="2xl">
          <TodoInput onTodoAdded={() => loadTodos()} />
          <Switch>
            <Route path="/" component={AllTodos} exact={true} />
            <Route path="/completed" component={CompletedTodos} exact={true} />
            <Route
              path="/uncompleted"
              component={UncompletedTodos}
              exact={true}
            />
          </Switch>
        </Container>
      </Flex>
    </>
  );
}

export default HomePage;