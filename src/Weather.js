import './Weather.css';
import React from "react";

export default function Weather () {
let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
  };

    return (
        <div className="Weather">
      
        <h1>
          <i className="fas fa-rainbow"> </i> {" "}
          Weather On The Go....
        </h1>

        <div className="row">
          <div className="col-7">
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city here.."
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
          <div className="col -6">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img src={weatherData.imgUrl} alt="weatherIcon" />
                </div>
                <div className="col-8">
                  <h5 className="card-title">{weatherData.city}</h5>
                  <div className="card-text">
                    <span className="temp">{weatherData.temperature}</span> {" "}
                    <span className="units">°C | °F</span>
                  </div>
                  <p className="card-text"> Last Updated: </p>{" "}
                  <span className="card-text"> {weatherData.date} </span>
                  <p className="card-text">10°C / 18°C </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col -6">
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

              
          <div className= "open-source"> <a href="https://github.com/Reshvinder/final-shecodes-app" rel="noreferrer" target="_blank"> <small>Open-source code</small></a> <small> by Reshvinder Bhullar </small> </div>
              
       
      
        </div>
    
    );
}