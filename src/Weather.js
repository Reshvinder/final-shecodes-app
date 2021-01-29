import React, { useState } from "react";
import axios from "axios"; 
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";
import WeatherForecast from "./WeatherForecast";
import './Weather.css';


export default function Weather (props) {
const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse (response) {
    
    setWeatherData({
    ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
    });
}

function handleSubmit(event) {
    event.preventDefault();
    search();
  }

 function handleCityChange(event) {
    setCity(event.target.value);
  }


function search () {
const apiKey = "fe0d4526b64ca05843436bd7ebaf7c7a";
const units= "metric";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiURL).then(handleResponse);
}
  
  if (weatherData.ready) {
    return (
        <div className="Weather">
        <h1>
          <i className="fas fa-rainbow"> </i> {" "}
          Weather On The Go....
        </h1>

        <div className="row">
          <div className="col-7">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city here.."
                  onChange={handleCityChange}
                />
              </div>
            </form>
          </div>

          <div className="col-1">
              <i className="fas fa-search-location"></i>
          </div>

          <div className="col-4">
              <button className="btn btn-info">
                Current location
              </button>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <WeatherIcon code={weatherData.icon} />
                </div>
                <div className="col-8">
                  <h5 className="card-title">{weatherData.city}</h5>
                  <div className="card-text">
                       <WeatherConversion celsius={weatherData.temperature} />
                
                  </div>
                  <span className="card-text"> Last Updated:
                       <FormattedDate date={weatherData.date} /> 
                  </span>
                  <p className="card-text">{weatherData.minTemp}°C / {weatherData.maxTemp}°C </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <h5 className="card-title">{weatherData.description}</h5>
              <p className="card-text">
                Wind: {weatherData.wind} km/h
                <br />
                Humidity: {weatherData.humidity} %
              </p>
            </div>
          </div>
          </div>
          <WeatherForecast city={weatherData.city} />

              
          <div className= "open-source"> <a href="https://github.com/Reshvinder/final-shecodes-app" rel="noreferrer" target="_blank"> <small>Open-source code</small></a> <small> by Reshvinder Bhullar </small> </div>
              
       
      
        </div>

    );

     } else {
    search();
    return "Loading...";
  }



}