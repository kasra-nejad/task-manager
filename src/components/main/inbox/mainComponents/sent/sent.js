import React from "react";

import Messages from "./messages/messages";
import "./sent.css";

const Sent = props => {
  return (
    <div className="sent">
      <Messages />
    </div>
  );
};

export default Sent;
