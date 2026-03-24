import React from "react";
import StatCard from "./StatCard";
import "./StatsGrid.css";

const getCharBreakdown = (text, regex) => {
  const match = text.match(regex);
  if (!match) return { count: 0, details: {} };

  const count = match.length;
  const details = {};

  for (const char of match) {
    if (details[char]) {
      details[char]++;
    } else {
      details[char] = 1;
    }
  }

  return { count, details };
};

const StatsGrid = ({ text }) => {
  const capitals = getCharBreakdown(text, /[A-Z]/g);
  const smalls = getCharBreakdown(text, /[a-z]/g);
  const numbers = getCharBreakdown(text, /[0-9]/g);
  // Special chars: anything that is not alphanumeric or whitespace
  const specials = getCharBreakdown(text, /[^A-Za-z0-9\s]/g);

  return (
    <div className="stats-grid">
      <StatCard
        title="CAPITALS"
        count={capitals.count}
        details={capitals.details}
        colorTheme="blue"
      />
      <StatCard
        title="SMALL LETTERS"
        count={smalls.count}
        details={smalls.details}
        colorTheme="green"
      />
      <StatCard
        title="NUMBERS"
        count={numbers.count}
        details={numbers.details}
        colorTheme="orange"
      />
      <StatCard
        title="SPECIAL CHARS"
        count={specials.count}
        details={specials.details}
        colorTheme="red"
      />
    </div>
  );
};

export default StatsGrid;
