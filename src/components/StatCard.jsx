import React, { useState } from "react";
import "./StatCard.css";

const StatCard = ({ title, count, details, colorTheme }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const getThemeClass = () => {
    switch (colorTheme) {
      case "blue":
        return "theme-blue";
      case "green":
        return "theme-green";
      case "orange":
        return "theme-orange";
      case "red":
        return "theme-red";
      default:
        return "theme-blue";
    }
  };

  return (
    <div className={`stat-card ${getThemeClass()}`}>
      <div className="card-top">
        <h3 className="card-title">{title}</h3>
        <span className="card-count">{count}</span>
      </div>

      <div className="card-bottom">
        <button className="details-toggle" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="details-grid">
            {Object.keys(details).length === 0 ? (
              <span className="no-chars">No characters found</span>
            ) : (
              Object.entries(details).map(([char, freq]) => (
                <div key={char} className="char-badge">
                  <span className="char">{char === " " ? "Spc" : char}</span>
                  <span className="freq">×{freq}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
