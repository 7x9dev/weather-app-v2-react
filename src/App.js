import "./App.css";
import Search from "./Search";
import City from "./City";
import Date from "./Date";
import Decsription from "./Decsription";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
   return (
      <div className="App">
         <div className="container p-5 shadow p-3 rounded-4">
            <Search />
            <City />
            <Date />
            <Decsription />
            <Weather />
         </div>
         <Footer />
      </div>
   );
}
