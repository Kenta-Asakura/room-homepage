import React from "react";
import '../src/global.css'
import { ThemeProvider } from "styled-components";
// import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/Global";
import Header from "./components/Header";
import Showcase from "./components/Showcase";

const theme = {
  colors: {
    "Slate": "#090e19",
    "Dark Gray": "0, 0%, 63%",
    "Black": "0, 0%, 0%",
    "White": "0, 0%, 100%",
    "Very Dark Gray": "0, 0%, 27%",
  },
  fonts: {
    light: "500",
    medium: "600",
    heavy: "700",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Showcase />
      </>
    </ThemeProvider>
  );
}

export default App;
