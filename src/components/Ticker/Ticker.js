import React from "react";
import "./index.css";

const Ticker = ({ text }) => {
  return (
    <div className="ticker-container">
      <div className="ticker-items-wrapper">
        {text.map((el, index) => (
          <div key={el + index} className="ticker-item">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
