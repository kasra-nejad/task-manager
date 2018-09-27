import React, { Component } from "react";

import Picture from "../../../../images/cat.jpg";
import "./avatar.css";
class Avatar extends Component {
  state = {};

  render() {
    const { isOpen } = this.props;

    return (
      <div
        className="avatar"
        style={isOpen ? { display: "grid" } : { display: "none" }}
      >
        <div className="avatar__picture">
          <img src={Picture} alt="profile pictures" />
        </div>
        <h4 className="avatar__username">Hi Kasra</h4>
        <div className="avatar__info">
          <p className="avatar__info__location">
            <span>&#9899;</span> London
          </p>
          <p className="avatar__info__weather">
            <span>&#9728;</span> 25&#176;
          </p>
        </div>
      </div>
    );
  }
}

export default Avatar;
