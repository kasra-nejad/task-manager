import React from "react";

import Messages from "./messages/messages";
import "./unread.css";

const Unread = () => {
  return (
    <div className="unread">
      <Messages />
    </div>
  );
};

export default Unread;
