import { Input, Button } from "@chakra-ui/react";
import React, { useContext, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { createTodo } from "../api";
import { getToken } from "../ducks/auth";

function TodoInput({ onTodoAdded }) {
  const [input, setInput] = useState("");

  const inputRef = useRef();
  const token = useSelector(getToken);

  const handleAdd = () => {
    createTodo(token, input)
      .then((resp) => {
        setInput("");
        console.log(inputRef);
        inputRef.current.focus();
        onTodoAdded();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div style={{ display: "flex", marginTop: "1rem" }}>
      <Input
        ref={inputRef}
        style={{ flexGrow: 1 }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <Button
        variant="solid"
        bgColor="blue.500"
        textColor="white"
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  );
}

export default TodoInput;

const TInput = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});

const Component = () => {
  const inputRef = useRef();
  return <TInput ref={inputRef} />;
};