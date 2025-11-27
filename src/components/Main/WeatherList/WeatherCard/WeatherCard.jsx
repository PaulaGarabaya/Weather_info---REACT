import React from "react";

const WeatherCard = ({ day }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>DÍA</h3>
      <h3>{day.date}</h3>
      {day.hours.map((hour) => (
        <div key={hour.time}>
          <p>Hora: <span className="bold">{hour.time}</span></p>
          <p>Temperatura: <span className="bold">{hour.temp}°C</span></p>
          <p>Condición: <span className="bold">{hour.condition}</span></p>
          {hour.icon && (
            <img
              src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
              alt={hour.condition}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;

