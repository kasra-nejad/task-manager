import React, { Component } from "react";

import Picture from "../../../../images/cat.jpg";
import "./avatar.css";
class Avatar extends Component {
  state = {
    weather: 0
  };

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = () => {
    const url =
      "http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=37b3bd6754246ed9f8c27d7b9ab81a8e";
    fetch(url)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          setWeather(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });

    const setWeather = data => {
      this.setState({
        weather: Math.round(data["list"][0]["main"]["temp"])
      });
    };
  };

  render() {
    const { isOpen } = this.props;
    const { weather } = this.state;

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
            <span>&#9728;</span> {weather}
            &#176;
          </p>
        </div>
      </div>
    );
  }
}

export default Avatar;
