import React, { Component } from "react";
import uuid from "uuid";

import Contact from "./contact/contact";
import "./contacts.css";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
        name: "Jose",
        phoneNumber: "555-5555",
        email: "jose@jose.info"
      },
      {
        id: uuid(),
        name: "John",
        phoneNumber: "666-6666",
        email: "john@john.info"
      },
      {
        id: uuid(),
        name: "Jenn",
        phoneNumber: "777-7777",
        email: "jenn@jenn.info"
      }
    ]
  };

  addPerson = () => {
    const { contacts } = this.state;

    contacts.push({
      id: uuid(),
      name: "",
      phoneNumber: "",
      email: ""
    });

    this.setState({
      contacts: contacts
    });
  };

  handleChange = (event, id, name) => {
    const { contacts } = this.state;
    contacts.forEach(contact => {
      if (contact.id == id) {
        for (const key of Object.keys(contact)) {
          if (key == name) {
            contact[key] = event.target.value;
          }
        }
      }
    });
    this.setState({ contacts: contacts });
  };

  deleteContact = targetId => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id != targetId);

    this.setState({
      contacts: updatedContacts
    });
  };

  render() {
    const { contacts } = this.state;
    const displayedContacts = contacts.map(contact => {
      return (
        <Contact
          id={contact.id}
          key={contact.id}
          name={contact.name}
          phoneNumber={contact.phoneNumber}
          email={contact.email}
          handleChange={this.handleChange}
          deleteContact={this.deleteContact}
        />
      );
    });
    return (
      <div className="contacts">
        <div className="contacts__displayedContacts">{displayedContacts} </div>
        <div className="contacts__addPerson" onClick={this.addPerson}>
          Add Person
        </div>
      </div>
    );
  }
}

export default Contacts;
