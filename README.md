# Weather Now

## Overview  
**Weather Now** is a responsive web application built with **React.js** that allows users to check real-time weather conditions for any city in the world.  
The app dynamically updates its background and theme based on the current weather, offering a visually appealing and modern user experience.

---

## Features  
- Displays **real-time weather data** for any searched city  
- Dynamic background changes based on weather conditions (sunny, rainy, cloudy, snowy, etc.)  
- **Glassmorphism design** for the weather card  
- Built-in **light and dark themes**  
- Responsive layout for mobile and desktop  
- Smooth loading and error handling  

---

## Technology Stack  
- **Framework:** React.js  
- **Styling:** CSS3  
- **API Used:** [Open-Meteo API](https://open-meteo.com/)  
- **State Management:** React useState & useEffect hooks  

---

## Folder Structure
```
src/
│
├── Components/
│   ├── WeatherCard.jsx
│   ├── SearchBar.jsx
│   ├── assets/
│   │   ├── sunny.webp
│   │   ├── cloudy.avif
│   │   ├── rainy1.avif
│   │   ├── thunderstorm.avif
│   │   ├── snowy.avif
│   │   └── foggy.webp
│
├── App.jsx
├── App.css
├── index.js
└── index.css
```

---

## API Integration  
This project uses the **Open-Meteo API** for fetching live weather data.  
Example API endpoint used:  
```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
```

---

## How to Run Locally  

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-now.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd weather-now
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. Open your browser and visit:  
   [http://localhost:3000](http://localhost:3000)

---

## Responsive Design  
- The entire layout is optimized for both desktop and mobile screens.  
- The weather card and search bar automatically resize and adjust spacing on smaller viewports.

---

## Error Handling  
- Displays loading indicators while fetching data.  
- Shows user-friendly error messages for invalid city names or network issues.

---

## Future Enhancements  
- Add 5-day or hourly forecast view.  
- Include geolocation-based weather detection.  
- Add unit toggle option (Celsius/Fahrenheit).  
- Enhance background animations based on real-time weather.

---

## Developer Information  
**Developer:** Kanimozhi R  
**Role:** Frontend Developer (React.js)  
**LinkedIn:** [Add your LinkedIn profile link here]  
**GitHub:** [Add your GitHub profile link here]
