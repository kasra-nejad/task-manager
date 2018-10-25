import React from "react";
import { Route, Switch } from "react-router-dom";

import Tabs from "./tabs/tabs";
import Unread from "./mainComponents/unread/unread";
import Sent from "./mainComponents/sent/sent";
import Archive from "./mainComponents/archive/archive";
import "./inbox.css";

const Inbox = props => {
  return (
    <div className="inbox">
      <Tabs />
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + "/inbox/"}
          component={Unread}
          exact
        />
        <Route
          path={process.env.PUBLIC_URL + "/inbox/unread"}
          component={Unread}
        />
        <Route path={process.env.PUBLIC_URL + "/inbox/sent"} component={Sent} />
        <Route
          path={process.env.PUBLIC_URL + "/inbox/archive"}
          component={Archive}
        />
      </Switch>
    </div>
  );
};

export default Inbox;
