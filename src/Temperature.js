import React from "react";

export default function Temperature(props) {
   return (
      <div className="temp-current">
         <img className="weather-icon" src="" alt="" />
         <div className="degree">
            <h1>{props.tempValue}</h1>
            <p className="temp-unit">°C</p>
         </div>
      </div>
   );
}
