import React, { useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ ready: false });

   function handleResponse(response) {
      setWeatherData({
         ready: true,
         city: response.data.name,
         date: "Saturday 20:39",
         description: response.data.weather[0].description,
         temperature: response.data.main.temp,
         humidity: response.data.main.humidity,
         wind: response.data.wind.speed,
         icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      });
   }

   if (weatherData.ready) {
      return (
         <div className="container p-5 shadow p-3 rounded-4">
            <div className="Search">
               <form className="input-group">
                  <input
                     className="form-control input"
                     type="search"
                     placeholder="Enter a city"
                  />
                  <button className="btn btn-primary me-3" type="submit">
                     <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <button className="btn btn-outline-secondary" type="button">
                     Current city
                  </button>
               </form>
            </div>
            <div className="city">
               <h2>{weatherData.city}</h2>
            </div>
            <p>{weatherData.date}</p>
            <p className="weather-dscr">{weatherData.description}</p>
            <div className="weather-current">
               <img src={weatherData.icon} alt="weather icon" />
               <div className="temp-current">
                  <div className="temp-current">
                     <img className="weather-icon" src="" alt="" />
                     <div className="degree">
                        <h1>{Math.round(weatherData.temperature)}</h1>
                        <p className="temp-unit">°C</p>
                     </div>
                  </div>
               </div>
               <div className="vertical-line"></div>
               <div className="weather-details">
                  <p>Humidity: {weatherData.humidity}%</p>
                  <p>Wind: {Math.round(weatherData.wind)}km/h</p>
               </div>
            </div>
         </div>
      );
   } else {
      const apiKey = "5166d6bfe55bc81ec2d7bb78b538650f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return (
         <div className="spinner">
            <ColorRing
               visible={true}
               height="80"
               width="80"
               ariaLabel="blocks-loading"
               wrapperStyle={{}}
               wrapperClass="blocks-wrapper"
               colors={["#5c7aff", "#1ccad8", "#f8f7f9", "#f7ec59", "#ff66d8"]}
            />
         </div>
      );
   }
}
