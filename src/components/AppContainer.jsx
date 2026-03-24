import React, { useState } from "react";
import TextInput from "./TextInput";
import StatsGrid from "./StatsGrid";
import "./AppContainer.css";

const AppContainer = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <main className="app-container">
      <div className="left-panel">
        <TextInput
          text={text}
          onTextChange={handleTextChange}
          onClear={clearText}
        />
      </div>
      <div className="right-panel">
        <StatsGrid text={text} />
      </div>
    </main>
  );
};

export default AppContainer;
