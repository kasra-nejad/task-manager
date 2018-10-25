import React, { Component } from "react";
import uuid from "uuid";

import Currency from "./currency/currency";
import "./currencies.css";

class Currencies extends Component {
  state = {
    currencies: [
      { id: uuid(), type: "USD", value: 0 },
      { id: uuid(), type: "CAD", value: 0 },
      { id: uuid(), type: "EUR", value: 0 },
      { id: uuid(), type: "CHF", value: 0 }
    ]
  };

  componentDidMount() {
    this.setUrl();
  }

  setUrl = () => {
    let { currencies } = this.state;
    let currencyCode;
    currencies.forEach(currency => {
      let url;
      currencyCode = currency.type;
      url = `https://free.currencyconverterapi.com/api/v5/convert?q=${currencyCode}_GBP&compact=y`;
      this.fetchCurrencies(url, currencyCode);
    });
  };

  fetchCurrencies = (url, code) => {
    let { currencies } = this.state;
    let newCurrencies = [];
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
          newCurrencies = currencies.map(currency => {
            if (currency.type == code) {
              currency.value = data[`${currency.type}_GBP`]["val"];
            }
            return currency;
          });
          displayCurrencies(newCurrencies);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });

    const displayCurrencies = newCurrencies => {
      this.setState({ currencies: newCurrencies });
    };
  };

  render() {
    const { currencies } = this.state;

    const displayedCurrencies = currencies.map(currency => {
      return (
        <Currency
          id={currency.id}
          type={currency.type}
          value={currency.value}
        />
      );
    });

    return <div className="currencies">{displayedCurrencies}</div>;
  }
}

export default Currencies;
