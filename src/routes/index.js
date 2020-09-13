
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ListEmployee from "../components/ListEmployee";
// import ListEmployees from './../components/ListEmployees';
export default function Routes() {
    return(
        <Router>
        <div>
            <h1>List Employees</h1>
            <Switch>
                <Route path='/' exact component = {ListEmployee}></Route>
            </Switch>
        </div>
    </Router>
    );

}