import React, { Fragment, useEffect, useRef } from "react";
import "./CityComponent.css";

const CityComponent = (props) => {
  const { fetchWeather, updateCity, loading } = props;
  const searchInput = useRef();

  useEffect(() => {
    searchInput.current.focus();
  });

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
          ref={searchInput}
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
