import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import AnimBackground from "./Components/AnimBackground";
import ThemeToggle from "./Components/ThemeToggle";
import "./App.css";

const getConditionFromCode = (code) => {
  if (code === 0) return "sunny";
  if (code >= 1 && code <= 3) return "partly-cloudy";
  if (code === 45 || code === 48) return "foggy";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "rainy";
  if (code >= 71 && code <= 77) return "snowy";
  if (code >= 95 && code <= 99) return "thunder";
  return "cloudy";
};

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [condition, setCondition] = useState("neutral");
  const [dark, setDark] = useState(true);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setCondition("neutral");

    try {
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
      );
      if (!geoRes.data.results || geoRes.data.results.length === 0) {
        setError("City not found!");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoRes.data.results[0];
      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      const data = weatherRes.data.current_weather;
      const cond = getConditionFromCode(data.weathercode);
      setCondition(cond);

      setWeather({
        city: name,
        country,
        temperature: data.temperature,
        windspeed: data.windspeed,
        time: new Date(data.time).toLocaleString(),
        condition: cond,
      });
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (

  <div className={`app ${dark ? "dark" : "light"} ${weather ? condition : ""}`}>
    <AnimBackground condition={condition} />
    <ThemeToggle dark={dark} setDark={setDark} />

    <motion.div
      className="app-overlay"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="title">🌤 Weather Now</h1>
      <SearchBar onSearch={fetchWeather} />

      {loading && <p className="loader"></p>}
      {error && <p className="error">{error}</p>}

      <AnimatePresence>
        {weather && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <WeatherCard weather={weather} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </div>
);

};

export default App;
