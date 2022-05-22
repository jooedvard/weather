import React, { Component } from 'react';
import '../css/weather.css';

class Weather extends Component {
    constructor(props) {
        super(props);
    }

    
    render() { 
        return ( 
            <div className='info-panel'>
                <div className='title'>{this.props.celsius}°</div>
                <div className='info-grid'>
                    <div className='city'> {this.props.city}</div>
                    <div className='icon'><img src={this.props.icon}></img></div>
                    <div className='time'>
                        <span>{this.props.clock} - </span>
                        <span>{this.props.date}</span>
                        </div>
                    <div className='weather-type'>{this.props.weatherType}</div>
                </div>
            </div>
         );
    }
}
 
export default Weather;