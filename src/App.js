import React from "react";
import styled from "styled-components";
import content from "./Content";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    "Dark Gray": "0, 0%, 63%",
    Black: "0, 0%, 0%",
    White: "0, 0%, 100%",
    "Very Dark Gray": "0, 0%, 27%",
  },
  fonts: {
    light: "500",
    medium: "600",
    heavy: "700",
  },
  mobile: "375px",
};

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      Hello World
    </div>
  );
}

export default App;
