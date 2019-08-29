import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";
import Signin from "./Signin";
import ForgotPassword from "./ForgotPassword";
import Verify from "./Verify";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    // Routes of all paths
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/verify" component={Verify} />
      <Route exact path="/reset-password" component={ResetPassword} />
    </Router>
  );
}

export default App;
