import React from "react";

export default function CurrentWeather(props) {
   return (
      <div className="currentWeather">
         <div className="weather-current">
            <img
               className="weather-icon"
               src={props.data.icon}
               alt="weather icon"
            />
            <div className="temp-current">
               <div className="degree">
                  <h1>{Math.round(props.data.temperature)}</h1>
                  <p className="temp-unit">°C</p>
               </div>
            </div>
            <div className="vertical-line"></div>
            <div className="weather-details">
               <p>Humidity: {props.data.humidity}%</p>
               <p>Wind: {Math.round(props.data.wind)} km/h</p>
            </div>
         </div>
      </div>
   );
}