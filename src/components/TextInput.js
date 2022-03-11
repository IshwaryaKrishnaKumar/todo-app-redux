import { Input } from "@chakra-ui/react";
import "./TextInput.css";

function TextInput(props) {
  return (
    <Input
      placeholder={props.label}
      size="md"
      bg="white"
      id={props.name}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export default TextInput;