import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { clearToken } from "../ducks/auth";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearToken());
  };

  return (
    <Flex
      bg="blue.600"
      height="3rem"
      alignItems="center"
      justifyContent={"space-between"}
      px="2rem"
    >
      <Text color={"white"} fontSize="2xl">
        TodoApp
      </Text>
      <Button size="sm" onClick={handleLogout}>
        Logout
      </Button>
    </Flex>
  );
}