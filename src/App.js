import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/main/home/home";
import Inbox from "./components/main/inbox/inbox";

import Calendar from "./components/main/calendar/calendar";
import Contacts from "./components/main/contacts/contacts";
import NoMatch from "./components/nomatch/nomatch";
import Sidebar from "./components/sidebar/sidebar";

import "./App.css";
import "./components/main/main.css";
import Background from "./images/background2.jpg";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app" style={{ backgroundImage: `url(${Background})` }}>
          <Sidebar />
          <Switch className="main">
            <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact />
            <Route path={process.env.PUBLIC_URL + "/inbox"} component={Inbox} />
            <Route
              path={process.env.PUBLIC_URL + "/calendar"}
              component={Calendar}
            />
            <Route
              path={process.env.PUBLIC_URL + "/Contacts"}
              component={Contacts}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
