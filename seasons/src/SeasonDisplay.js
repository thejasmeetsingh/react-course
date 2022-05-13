import "./SeasonDisplay.css";
import React from "react";

const SeasonConfig = {
  summer: {
    text: "Burr, It is Chilly",
    iconName: "snowflake",
  },
  winter: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
