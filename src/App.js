import React, { Component } from "react";

import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import Background from "./images/background2.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${Background})` }}>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
