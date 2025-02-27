<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherApp from "./WeatherApp";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState({desc: "", temp: "", wind: "", humidity: "", icon: ""});
  const [location, setLocation] = useState(
    {lat: "51.4893335", lng: "-0.1440551"}
);
  const [loading, setLoading] = useState(false);

  const API_KEY = "1798f8b5ad2940d2b3e93727252702";
 

  useEffect(() => {
    const URL = `https://api.weatherapi.com/v1/current.json?q=${location.lat},${location.lng}&key=${API_KEY}`;
    axios
      .get(URL)
      .then((response) => {
        let nachra_jawia = response.data.current;
        setLoading(true);
        setWeather({desc: nachra_jawia.condition.text,
           temp: nachra_jawia.temp_c,
            wind: nachra_jawia.wind_kph,
            humidity: nachra_jawia.humidity,
             icon:`https:${nachra_jawia.condition.icon}`
        }); 
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city, location]);

  function handleOnSearch(format, city) {
    setCity(city);
    setLocation(format);
  }

  return (
    <div>
      <div id="container">
      <WeatherApp loading={loading} city={city} description={weather.desc} temp={weather.temp} humidity={weather.humidity} windSpeed={weather.wind} image={weather.icon}/>
      <Form onSearch={handleOnSearch} />
      </div>
      <Footer text="GoldenDragon © 2025" />
    </div>
  );
}

export default App;
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherApp from "./WeatherApp";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState({desc: "", temp: "", wind: "", humidity: "", icon: ""});
  const [location, setLocation] = useState(
    {lat: "51.4893335", lng: "-0.1440551"}
);
  const [loading, setLoading] = useState(false);

  const API_KEY = "1798f8b5ad2940d2b3e93727252702";
 

  useEffect(() => {
    const URL = `https://api.weatherapi.com/v1/current.json?q=${location.lat},${location.lng}&key=${API_KEY}`;
    axios
      .get(URL)
      .then((response) => {
        let nachra_jawia = response.data.current;
        setLoading(true);
        setWeather({desc: nachra_jawia.condition.text,
           temp: nachra_jawia.temp_c,
            wind: nachra_jawia.wind_kph,
            humidity: nachra_jawia.humidity,
             icon:`https:${nachra_jawia.condition.icon}`
        }); 
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city, location]);

  function handleOnSearch(format, city) {
    setCity(city);
    setLocation(format);
  }

  return (
    <div>
      <div id="container">
      <WeatherApp loading={loading} city={city} description={weather.desc} temp={weather.temp} humidity={weather.humidity} windSpeed={weather.wind} image={weather.icon}/>
      <Form onSearch={handleOnSearch} />
      </div>
      <Footer text="GoldenDragon © 2025" />
    </div>
  );
}

export default App;
>>>>>>> 8975eae (initial commit)
