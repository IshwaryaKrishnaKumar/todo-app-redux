import {
  List,
  ListItem,
  ListIcon,
  Text,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import PropType from "prop-types";

function TodoList({ todos, loading }) {
  return loading ? (
    <Spinner size="xl" />
  ) : (
    <List spacing={3}>
      {todos.map((todo) => (
        <ListItem key={todo._id}>
          <Flex>
            <Text>{todo.desc} - </Text>
            {todo.completed && <Text color="green.500">Done</Text>}
            {!todo.completed && <Text color="red.500">Not Done</Text>}
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}

TodoList.defaultProps = {
  subTitle: "Default Subtitle",
};

TodoList.propTypes = {
  todos: PropType.arrayOf(
    PropType.shape({
      _id: PropType.string.isRequired,
      desc: PropType.string.isRequired,
      completed: PropType.bool.isRequired,
    }).isRequired
  ),
};

export default TodoList;