import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Picture from "../../../images/cat.jpg";
import "./avatar.css";
class Avatar extends Component {
  state = {
    temp: 0,
    weather: ""
  };

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = () => {
    const url =
      "https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=";
    fetch(url)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function(data) {
          setWeather(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });

    const setWeather = data => {
      this.setState({
        temp: Math.round(data["list"][0]["main"]["temp"]),
        weather: data.list[0]["weather"][0]["main"]
      });
    };
  };

  handleActivate = () => {
    this.props.activate();
  };

  render() {
    const { temp } = this.state;
    const { active } = this.props;
    return (
      <NavLink to={process.env.PUBLIC_URL + "/"}>
        <div
          className="avatar"
          style={active ? { backgroundColor: "rgba(32, 65, 0, 0.747)" } : {}}
          onClick={this.handleActivate}
        >
          <div className="avatar__picture">
            <img src={Picture} alt="profile pictures" />
          </div>
          <h4 className="avatar__username">Jamie Rockton</h4>
          <div className="avatar__info">
            <p className="avatar__info__location">
              <span>&#9899;</span> London
            </p>
            <p className="avatar__info__weather">
              {temp}
              &#176;
            </p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default Avatar;
