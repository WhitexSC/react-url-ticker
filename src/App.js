import React, { useEffect, useState } from "react";
import Ticker from "./components/Ticker";
import initialTickerState from "./initialTickerState";
const queryString = require("query-string");

const App = () => {
  // const { width, backgroundColor, height } = useParams();
  //   const { text, textColor, fontSize } = useParams;

  // const [tickerText, setTickerText] = useState(null);
  // const styles = {};
  const [state, setState] = useState(initialTickerState);

  useEffect(() => {
    const parsed = queryString.parse(window.location.href);
    // parsed.map(el => !!el)
    //http://localhost:3000/ticker&width=500&height=200&backgroundColor=rgb(123,23,23)&text=[%22word%22,%22dsad%22,%22sda%22]&fontSize=300    
    const {
      text,
      textColor,
      fontSize,
      width,
      backgroundColor,
      height,
    } = parsed;
    console.log('parsed', parsed)
    setState({
      text: JSON.parse(text),
      textColor,
      fontSize,
      width,
      backgroundColor,
      height,
    });
  }, []);
console.log('state', state)
  return (
    <div
      style={{
        textColor: state.textColor,
        backgroundColor: state.backgroundColor,
        fontSize: state.fontSize,
        width: state.width,
        height: state.height,
      }}
    >
      <Ticker text={state.text} />
    </div>
  );
};

export default App;
