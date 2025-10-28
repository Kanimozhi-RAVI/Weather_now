import React, { useEffect, useState } from "react";
import {
  WiStrongWind,
  WiThermometer,
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";
import { motion, AnimatePresence } from "framer-motion";
import "./WeatherCard.css";

const WeatherIcon = ({ condition }) => {
  const icons = {
    sunny: <WiDaySunny className="big-icon" />,
    "partly-cloudy": <WiCloud className="big-icon" />,
    cloudy: <WiCloudy className="big-icon" />,
    rainy: <WiRain className="big-icon" />,
    snowy: <WiSnow className="big-icon" />,
    thunder: <WiThunderstorm className="big-icon" />,
    foggy: <WiFog className="big-icon" />,
  };
  return icons[condition] || <WiDaySunny className="big-icon" />;
};

const WeatherCard = ({ weather }) => {
  const [temp, setTemp] = useState(weather.temperature);


  useEffect(() => {
    const timeout = setTimeout(() => setTemp(weather.temperature), 200);
    return () => clearTimeout(timeout);
  }, [weather.temperature]);


  const cardClass = `weather-card ${weather.condition}`;

  return (
    <motion.div
      className={cardClass}
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {weather.city}, {weather.country}
      </motion.h2>

      <WeatherIcon condition={weather.condition} />

      <div className="temp-section">
        <WiThermometer className="icon" />
        <div className="temp-flip">
          <AnimatePresence mode="wait">
            <motion.h1
              key={temp}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {Math.round(temp)}°C
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      <motion.p
        className="desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {weather.condition.replace("-", " ")}
      </motion.p>

      <p>
        <WiStrongWind className="icon-small" /> {weather.windspeed} km/h wind
      </p>
      <p className="time">{weather.time}</p>
    </motion.div>
  );
};

export default WeatherCard;
