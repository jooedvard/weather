import React, { Component } from 'react';
class WeatherDetails extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='details'>
            <div><span>Cloudy</span><span>{this.props.cloud}%</span></div>
            <div><span>Humidity</span><span>{this.props.humidity}%</span></div>
            <div><span>Wind</span><span>{this.props.wind}km/h</span></div>
            </div>
         );
    }
}
 
export default WeatherDetails;