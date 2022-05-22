import React, { Component } from "react";
import Table from "./Table";

class Timetable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timetable">
        {this.props.forecast.map((day,index) => {
          return <Table key={index} day={day}></Table>;
        })}
      </div>
    );
  }
}

export default Timetable;
