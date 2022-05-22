import React, { Component } from "react";
import '../css/table.css';
import {WiRaindrop,WiSnowflakeCold} from 'react-icons/wi';

class Table extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    let temp = this.props.day.time.split(" ");
    let date, clock;
    date = temp[0];
    clock = temp[1];
    this.date = date;
    this.clock = clock;
  }

  
  render() {
    return (
      <div className="table">
        <div className="clock">{this.clock}</div>
        <div className="condition">
            <div className="condition-text">{this.props.day.condition.text}</div>
            <img src={this.props.day.condition.icon}></img>
        </div>
        <div>
            {this.props.day.temp_c}°C
        </div>
        <div className="chance-to-rain">
            <div><WiRaindrop className="icon rain"/> <span>{this.props.day.chance_of_rain}%</span></div>
            <div><WiSnowflakeCold className="icon"/> <span>{this.props.day.chance_of_snow}%</span></div>
        </div>
      </div>
    );
  }
}

export default Table;
