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
        <Route path={"/inbox/"} component={Unread} exact />
        <Route path={"/inbox/unread"} component={Unread} />
        <Route path={"/inbox/sent"} component={Sent} />
        <Route path={"/inbox/archive"} component={Archive} />
      </Switch>
    </div>
  );
};

export default Inbox;
