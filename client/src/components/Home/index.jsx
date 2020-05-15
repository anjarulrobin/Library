import React from "react";
import { Switch, Route } from "react-router-dom";
import Books from "./Books";
import SingleBook from "./SingleBook";
import LoginLayout from "../../layouts/Login";
import RegisterLayout from "../../layouts/Register";

const routes = [
  { pathname: "login", component: LoginLayout },
  { pathname: "register", component: RegisterLayout },
  { pathname: "books/:bookId", component: SingleBook },
  { pathname: "", component: Books },
];

const Home = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={props.match.path + "login"} component={LoginLayout} />
        <Route
          path={props.match.path + "register"}
          component={RegisterLayout}
        />
        <Route
          path={props.match.path + "books/:bookId"}
          component={SingleBook}
        />
        <Route path={props.match.path} component={Books} />
      </Switch>
    </React.Fragment>
  );
};

export default Home;
