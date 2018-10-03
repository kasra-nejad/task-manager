import React, { Component } from "react";
import uuid from "uuid";

import Day from "./day/day";
import "./days.css";

class Days extends Component {
  state = {
    days: []
  };

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = () => {
    const url =
      "http://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&APPID=37b3bd6754246ed9f8c27d7b9ab81a8e";
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
        days: [
          {
            id: uuid(),
            date: data.list[0]["dt_txt"].slice(11, 16),
            dayTemp: Math.round(data.list[0]["main"]["temp"]),
            weather: data.list[0]["weather"][0]["main"]
          },
          {
            id: uuid(),
            date: data.list[1]["dt_txt"].slice(11, 16),
            dayTemp: Math.round(data.list[1]["main"]["temp"]),

            weather: data.list[1]["weather"][0]["main"]
          },
          {
            id: uuid(),
            date: data.list[2]["dt_txt"].slice(11, 16),
            dayTemp: Math.round(data.list[2]["main"]["temp"]),

            weather: data.list[2]["weather"][0]["main"]
          },
          {
            id: uuid(),
            date: data.list[3]["dt_txt"].slice(11, 16),
            dayTemp: Math.round(data.list[3]["main"]["temp"]),

            weather: data.list[3]["weather"][0]["main"]
          },
          {
            id: uuid(),
            date: data.list[4]["dt_txt"].slice(11, 16),
            dayTemp: Math.round(data.list[4]["main"]["temp"]),

            weather: data.list[4]["weather"][0]["main"]
          }
        ]
      });
    };
  };

  render() {
    const { days } = this.state;

    const displayedDays = days.map(day => {
      return (
        <Day
          date={day.date}
          dayTemp={day.dayTemp}
          nightTemp={day.nightTemp}
          weather={day.weather}
        />
      );
    });
    return <div className="days">{displayedDays}</div>;
  }
}

export default Days;
