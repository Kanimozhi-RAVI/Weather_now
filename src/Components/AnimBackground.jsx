import React from "react";
import "./AnimBackground.css";

const AnimBackground = ({ condition }) => {
  return (
    <div className={`anim-bg ${condition}`}>
      {condition === "rainy" && (
        <div className="rain">
          {[...Array(40)].map((_, i) => (
            <span key={i} className="drop" />
          ))}
        </div>
      )}
      {condition.includes("cloudy") && (
        <div className="anim-bg">
  {condition.includes("cloudy") && (
    <div className="clouds cloudy-bg" />
  )}
  {condition === "partly-cloudy" && (
    <div className="clouds" />
  )}
</div>

      )}
    </div>
  );
};

export default AnimBackground;
