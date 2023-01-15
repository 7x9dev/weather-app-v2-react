import "./App.css";
import Search from "./Search";
import City from "./City";
import Date from "./Date";
import Decsription from "./Decsription";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Footer from "./Footer";

export default function App() {
   return (
      <div className="App">
         <div className="container p-5 shadow p-3 rounded-4">
            <Search />
            <City />
            <Date />
            <Decsription />
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
         </div>
         <Footer />
      </div>
   );
}
