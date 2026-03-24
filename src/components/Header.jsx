import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">
        Character <span className="highlight">Counter</span>
      </h1>
      <p className="subtitle">Real-time text breakdown and analysis</p>
    </header>
  );
};

export default Header;
