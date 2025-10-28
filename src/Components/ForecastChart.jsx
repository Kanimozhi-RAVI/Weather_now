import React from "react";

/**
 * Small SVG line chart showing max temperatures.
 * Expects data = [{date, max, min}, ...]
 */
const ForecastChart = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <p className="muted">No forecast available</p>;
  }

  const values = data.map((d) => d.max);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = 600;
  const height = 120;
  const pad = 24;
  const stepX = (width - pad * 2) / (values.length - 1 || 1);

  const points = values
    .map((v, i) => {
      const x = pad + i * stepX;
      const y =
        pad + ((max - v) / (max - min || 1)) * (height - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="chart-wrap">
      <svg viewBox={`0 0 ${width} ${height}`} className="forecast-svg">
        <polyline
          points={points}
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* circles */}
        {values.map((v, i) => {
          const x = pad + i * stepX;
          const y =
            pad + ((max - v) / (max - min || 1)) * (height - pad * 2);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3.5"
              fill="white"
              opacity="0.95"
            />
          );
        })}
      </svg>

      <div className="chart-legend">
        {data.map((d, i) => (
          <div key={i} className="legend-item">
            <div className="lg-date">{new Date(d.date).toLocaleDateString(undefined, { weekday: 'short' })}</div>
            <div className="lg-temp">{Math.round(d.max)}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastChart;
