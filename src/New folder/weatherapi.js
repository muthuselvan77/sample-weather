/*import React, { useState, useEffect } from 'react';

const Weatherapi = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https:api.openweathermap.org/data/2.5/weather?q=tamilnadu&appid=986f33bdf061bb9fab80a42b7df0602f");
      const data = await response.json();
      setWeatherData(data);
    };
    fetchData();
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  const { temp, description, icon } = weatherData.current;

  return (
    <div>
      <h1>Current Weather</h1>
      <p>{temp}°C</p>
      <p>{description}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" />
    </div>
  );
};

export default Weatherapi;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weatherapi = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        
        "https:api.openweathermap.org/data/2.5/weather?q=madurai&appid=986f33bdf061bb9fab80a42b7df0602f"
      );

      setWeather(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <input type="text"></input>
    <input type="button" value="search"></input>
    
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
    </>
  );
};

export default Weatherapi;

