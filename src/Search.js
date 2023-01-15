import React from "react";
import "./App.css";

export default function Search() {
   return (
      <div>
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
   );
}
