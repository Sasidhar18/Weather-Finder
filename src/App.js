import React, { useState } from "react";
import "./App.css";
import CityComponent from "./Components/CityComponent";
import Weatherpage from "./Components/Weatherpage";
import Axios from "axios";

const App = () => {
  const [weather, updateWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [city, updateCity] = useState();
  const API_KEY = "ff79bd87a90cc6f5306ec5f750515c5e";

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      ).then((res) => {
        updateWeather(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <p className="weatherhead">Weather Finder</p>
      {city && weather ? (
        <Weatherpage city={city} weather={weather} />
      ) : (
        <CityComponent
          fetchWeather={fetchWeather}
          loading={loading}
          updateCity={updateCity}
        />
      )}
    </div>
  );
};

export default App;
