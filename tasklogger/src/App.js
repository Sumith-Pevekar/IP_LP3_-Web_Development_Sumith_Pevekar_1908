import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.component";
import TaskList from "./components/tasks-list.component";
import EditTask from "./components/edit-task.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";
import GetTime from "./components/get-time.component";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="sp pt-5">
            <div className="container">
              <Route path="/" exact component={TaskList} />
              <Route path="/edit/:id" component={EditTask} />
              <Route path="/create" component={CreateTask} />
              <Route path="/user" component={CreateUser} />
              <Route path="/get" component={GetTime} />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
