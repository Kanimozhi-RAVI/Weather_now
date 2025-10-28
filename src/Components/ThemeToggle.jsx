import React from "react";
import { motion } from "framer-motion";
import { WiDaySunny, WiMoonAltWaningCrescent4 } from "react-icons/wi";
import "./ThemeToggle.css";

const ThemeToggle = ({ dark, setDark }) => {
  return (
    <motion.div
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      whileTap={{ scale: 0.9 }}
    >
      {dark ? <WiDaySunny className="icons sun" /> : <WiMoonAltWaningCrescent4 className="icons moon" />}
    </motion.div>
  );
};

export default ThemeToggle;
