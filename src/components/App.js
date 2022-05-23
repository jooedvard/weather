import React, { Component } from "react";
import Menu from "./Menu";
import Weather from "./Weather";
import Timetable from "./Timetable";
import "../css/index.css";


class App extends Component {
  constructor(props) {
    super(props);
   
  }

  state = {
    celsius: 0,
    city: "",
    icon: "",
    time: "",
    weatherType: "",
    days: [],
  };

 
 

  getInfo = (info) => {
    let temp = info.location.localtime.split(" ");
    let date, clock;
    date = temp[0];
    clock = temp[1];
    
    let forecastDays = [];

    info.forecast.forecastday[0].hour.map((day, index) => {
      if (index % 3 == 0) {
        let data = {};
        data.chance_of_rain = day.chance_of_rain;
        data.chance_of_snow = day.chance_of_snow;
        data.temp_c = day.temp_c;
        data.condition = day.condition;
        data.time = day.time;
        forecastDays.push(data);
      }
    });

    this.setState({
      celsius: info.current.temp_c,
      city: info.location.name,
      icon: info.current.condition.icon,
      date: date,
      clock: clock,
      weatherType: info.current.condition.text,
      days: forecastDays,
    });
  };

  render() {
    return (
      <div className="app">

        <Menu info={this.getInfo} />
        <Timetable forecast={this.state.days}></Timetable>

        <Weather
          celsius={this.state.celsius}
          city={this.state.city}
          icon={this.state.icon}
          clock={this.state.clock}
          date={this.state.date}
          weatherType={this.state.weatherType}
        ></Weather>
      </div>
    );
  }
}

export default App;
