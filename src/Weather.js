import React from "react";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Wind from "./Wind";

export default function Weather() {
   return (
      <div className="weather-current">
         <img src="" alt="" />
         <div className="temp-current">
            <Temperature tempValue={15} />
         </div>
         <div className="vertical-line"></div>
         <div className="weather-details">
            <Humidity humidityValue={40} />
            <Wind windValue={15} />
         </div>
      </div>
   );
}