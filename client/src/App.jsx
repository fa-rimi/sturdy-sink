/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthPg from "./pages/AuthPg";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <AuthPg />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
