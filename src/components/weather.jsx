import React from 'react';
import '../css/weather.css'
import Loading from '../components/loading'
class Weather extends React.Component{
    
    render(){
        if(this.props.state.loading){
            console.log("loading")
            return (
                <center>
                    <div className="weather-container">
                        <Loading/>
                    </div>
                </center>
            )
        }
        else
        return (
            <center><div className="weather-container">
                <div className="city-name">
                   <b><span>{this.props.state.city}</span></b> <i><sub>{this.props.state.state},{this.props.state.country}</sub></i>
                </div>
                <div className="temprature">
                    <b>{this.props.state.temp}</b><sup>&deg;C</sup>
                </div>
                <div className="weather-icon">
                    <img src={this.props.state.weather_icons} alt="Icon"></img>
                </div>
                <div className="weather-desc">
                    <strong>{this.props.state.weather_description}</strong>
                </div>
            </div></center>
        )
    }
}
export default Weather