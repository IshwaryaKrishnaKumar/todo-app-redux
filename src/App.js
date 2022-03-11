import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { setToken } from "./ducks/auth";

function App() {
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      store.dispatch(setToken(token));
    }
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>
            <Route path="/signup" component={SignupPage} exact={true} />
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;