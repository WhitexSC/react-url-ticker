import React, { useEffect, useState } from "react";
import Ticker from "./components/Ticker";
import initialTickerState from "./initialTickerState";
const queryString = require("query-string");

const App = () => {
  const [state, setState] = useState(initialTickerState);

  useEffect(() => {
    const parsed = queryString.parse(window.location.href);
    const { text, color, fontSize, width, backgroundColor, height } = parsed;
    setState({
      text: JSON.parse(text),
      color,
      fontSize: parseInt(fontSize),
      width: parseInt(width),
      backgroundColor,
      height: parseInt(height),
    });
  }, []);

  return (
    <div
      style={{
        color: state.color,
        backgroundColor: state.backgroundColor,
        fontSize: state.fontSize,
        width: state.width,
        height: state.height,
        overflow: "hidden",
      }}
    >
      <Ticker text={state.text} />
    </div>
  );
};

export default App;
