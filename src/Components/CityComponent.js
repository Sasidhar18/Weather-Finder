import React, { Fragment } from "react";
import "./CityComponent.css";

const CityComponent = (props) => {
  const { fetchWeather, updateCity, loading } = props;
  console.log(loading)
  return (
    <Fragment>
      <img
        className="weatherimg"
        src="https://images-eu.ssl-images-amazon.com/images/I/71s6O0FiiqL.png"
        alt="cloudy"
      />
      <span className="choosecity">Find Weather of your city</span>
      <form className="searchbox" onSubmit={fetchWeather}>
        <input
          placeholder="Enter your city"
          onChange={(e) => updateCity(e.target.value)}
        />
       <div>
       <button className="search">Search</button>
       {loading && <span class="lds-dual-ring"></span>}
       </div>
      </form>
    </Fragment>
  );
};

export default CityComponent;
