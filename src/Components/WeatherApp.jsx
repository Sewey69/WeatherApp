import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherApp = (props) => {
  console.log(props);
  return (
    <div id="app-container">
      <h1>Today's Weather</h1>
      {props.loading ? (
        <div>
        <h2>{props.city}</h2>
        <div id="the-weather">
          <img src={props.image}/>
          <p className="text-lg">{props.description}</p>
        </div>
        <p id="top-P">Temperature: {props.temp}°C</p>
        <p>Humidity: {props.humidity}%</p>
        <p>Wind Speed: {props.windSpeed} km/h</p> 
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
