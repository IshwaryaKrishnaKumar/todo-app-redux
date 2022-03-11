import "./box.css";
import { Box as ChakraBox, Flex } from "@chakra-ui/react";

function Box(props) {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} minHeight="100vh">
      <ChakraBox
        bg="blackAlpha.200"
        w="100%"
        p="2rem"
        maxWidth={400}
        borderRadius="10"
      >
        {props.children}
      </ChakraBox>
    </Flex>
  );
}

export default Box;