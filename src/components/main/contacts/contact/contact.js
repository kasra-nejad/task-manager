import React from "react";

import "./contact.css";

const Contact = props => {
  const handleDeleteContact = () => {
    props.deleteContact(props.id);
  };

  const changeInfo = e => {
    props.handleChange(e, props.id, e.target.name);
  };

  return (
    <div className="contact">
      <button className="deleteContact" onClick={handleDeleteContact}>
        Delete
      </button>
      <div className="name">
        Name:&nbsp;
        <input name="name" value={props.name} onChange={changeInfo} />
      </div>
      <div className="phoneNumber">
        Phone:&nbsp;
        <input
          name="phoneNumber"
          value={props.phoneNumber}
          onChange={changeInfo}
        />
      </div>
      <div className="email">
        Email:&nbsp;{" "}
        <input name="email" value={props.email} onChange={changeInfo} />
      </div>
    </div>
  );
};

export default Contact;
