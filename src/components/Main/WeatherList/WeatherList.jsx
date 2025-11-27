import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./WeatherCard";
import './weatherList.css'


const WeatherList = () => {
  const [city, setCity] = useState(null);
  const [coords, setCoords] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  // Al montar, pedir geolocalización si no hay ciudad ni coords
  useEffect(() => {
    if (!city && !coords) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Geolocalización denegada, usando Madrid por defecto");
          setCity("Madrid");
        }
      );
    }
  }, [city, coords]);

  // Cada vez que cambia city o coords, hacer llamada a la API
  useEffect(() => {
    async function fetchWeather() {
      if (!city && !coords) return;

      const params = {
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      };

      if (coords) {
        params.lat = coords.lat;
        params.lon = coords.lon;
      } else {
        params.q = city;
      }

      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          { params }
        );

        // Agrupar datos por día
        const days = {};
        response.data.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!days[date]) days[date] = [];
          days[date].push({
            time: item.dt_txt.split(" ")[1],
            temp: item.main.temp,
            condition: item.weather[0].main,
            icon: item.weather[0].icon,
          });
        });

        const formattedDays = Object.keys(days).map((date) => ({
          id: uuidv4(),
          date,
          hours: days[date],
        }));

        setWeatherData(formattedDays);
      } catch (error) {
        console.error("Error obteniendo clima:", error);
        setWeatherData([]);
      }
    }

    fetchWeather();
  }, [city, coords]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = e.target.city.value.trim();
    if (newCity) {
      setCity(newCity);
      setCoords(null); // Limpiar coords porque ahora buscamos por ciudad
    }
    e.target.city.value = "";
  };

  return (
    <section>
      <h1>Pronóstico del tiempo</h1>

      <form onSubmit={handleSubmit}>
        <input name="city" placeholder="Escribe una ciudad" />
        <button>Buscar</button>
      </form>

      {weatherData.length > 0 &&
        weatherData.map((day) => <WeatherCard key={day.id} day={day} />)}
    </section>
  );
};

export default WeatherList;
