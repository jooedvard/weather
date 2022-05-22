import React, { Component } from "react";
import SearchBar from "./Searchbar";
import City from "./City";
import "../css/menu.css";
import "../css/weather-details.css";
import Axios from "../axios/Axios";
import WeatherDetails from "./WeatherDetails";


class Menu extends Component {
  state = {
    cities: ["New York", "Paris", "Tokyo", "California"],
    selected: {},
  };

  componentDidMount(){
    this.getCity('Budapest');
  }

  renderCities = () => {
    return this.state.cities.map((city) => {
      return <City key={city} city={city} getCity={this.getCity}></City>;
    });
  };

  renderDetails = () => {
    if (this.state.selected.current != undefined) {
      let { cloud, humidity, wind_kph } = this.state.selected.current;
 
      return (
        <WeatherDetails
          cloud={cloud}
          humidity={humidity}
          wind={wind_kph}
        ></WeatherDetails>
      );
    }
  };

  

  getCity = (city) => {
    let axios = new Axios();
    let api =
    "http://api.weatherapi.com/v1/forecast.json?key=9476f0547d5f4cb7afd84550222105&q="+city+"&days=1&aqi=no&alerts=no";
    axios.get(api, (city) => {
      this.setState({ selected: city.data });
      this.props.info(city.data)
    });

    

  };

  render() {
    return (
      <div className="menu">
        <div>
          <SearchBar getCity={this.getCity}></SearchBar>
        </div>
        <div>
          <div className="city-list">{this.renderCities()}</div>
        </div>

        <div className="weather-details">
          <div className="title">Weather Details</div>
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}

export default Menu;
