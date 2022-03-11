import { Button, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Box from "../components/Box";
import TextInput from "../components/TextInput";
import {
  authReducer,
  getToken,
  login,
  loginFailed,
  setToken,
} from "../ducks/auth";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const errorMsg = useSelector((state) => state.authReducer.errorMsg);

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      dispatch(loginFailed("Email is required"));
      return;
    }
    if (!password) {
      dispatch(loginFailed("Password is required"));
      return;
    }
   
    dispatch(login(email, password));
  };

  return (
    <Box>
      <form>
        <VStack alignItems={"stretch"}>
          <TextInput
            name="email"
            type="email"
            value={email}
            onChange={(value) => setEmail(value)}
            label="Email"
          />
          <TextInput
            name="password"
            type="password"
            value={password}
            onChange={(value) => setPassword(value)}
            label="Password"
          />
          <p>{errorMsg}</p>
          <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default LoginPage;