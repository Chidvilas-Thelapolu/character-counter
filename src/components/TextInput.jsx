import React from "react";
import "./TextInput.css";

const TextInput = ({ text, onTextChange, onClear }) => {
  return (
    <div className="text-input-container">
      <textarea
        className="text-area-input"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={onTextChange}
      ></textarea>

      <div className="text-input-footer">
        <button className="clear-btn" onClick={onClear}>
          Clear Text
        </button>
        <span className="char-count">{text.length} characters</span>
      </div>
    </div>
  );
};

export default TextInput;
