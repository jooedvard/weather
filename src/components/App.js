import React, { Component } from "react";
import Menu from "./Menu";
import Background from "./Background";
import Weather from "./Weather";

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
  };

  getInfo = (info) => {
    let temp =  info.location.localtime.split(" ");
    let date , clock;
    date = temp[0];
    clock = temp[1];
    
    this.setState({
      celsius: info.current.temp_c,
      city: info.location.name,
      icon: info.current.condition.icon,
      date : date,
      clock : clock,
      weatherType: info.current.condition.text,
    });
  };

  render() {
    return (
      <div>
        <Menu info={this.getInfo} />
        <Background />
        <Weather celsius={this.state.celsius} city={this.state.city} icon={this.state.icon} clock={this.state.clock} date={this.state.date} weatherType={this.state.weatherType}></Weather>
      </div>
    );
  }
}

export default App;
