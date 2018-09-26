import React from "react";
import ReactDOM from "react-dom";
import Scrabble from "./scrabble";

import "./styles.css";

function App() {
  return <Scrabble />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
