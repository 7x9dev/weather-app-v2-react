import React, { useState } from "react";
import axios from "axios";
import OneDayWeather from "./OneDayWeather";

export default function DailyForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

   function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
   }

   if (loaded) {
      return (
         <div className="DailyForecast">
            <div className="row row-cols-3 row-cols-lg-6">
               <OneDayWeather data={forecast[1]} />
            </div>
         </div>
      );
   } else {
      const apiKey = "5863935ee9cca4c02ed68203f807c65b";
      const latitude = props.coordinates.lat;
      const longitude = props.coordinates.lon;
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);

      return null;
   }
}
