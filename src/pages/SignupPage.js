import { useState } from "react";
import { signup } from "../api";
import TextInput from "../components/TextInput";
import Box from "../components/Box";
import { Button, VStack } from "@chakra-ui/react";

function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!name) {
      setErrorMsg("Name is required");
      return;
    }
    if (!email) {
      setErrorMsg("Email is required");
      return;
    }
    if (!password) {
      setErrorMsg("Password is required");
      return;
    }
    if (!cpassword) {
      setErrorMsg("Confirm password is required");
      return;
    }
    if (password !== cpassword) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    // Submit the api request
    signup(name, email, password)
      .then((resp) => {
        if (resp.status === 204) {
          setErrorMsg("Successfully signed up");
        } else {
          setErrorMsg("Failed to signup");
        }
      })
      .catch((e) => {
        setErrorMsg("Failed to signup");
        console.log(e);
      });
  };

  return (
    <Box>
      <form>
        <VStack alignItems={"stretch"}>
          <TextInput
            name="name"
            type="text"
            value={name}
            onChange={(value) => setName(value)}
            label="Name"
          />
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
          <TextInput
            name="cpassword"
            type="password"
            value={cpassword}
            onChange={(value) => setCPassword(value)}
            label="Confirm Password"
          />
          <p>{errorMsg}</p>
          <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
            Signup
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default SignupPage;