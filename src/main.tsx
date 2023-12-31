import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle.js";
import { Normalize } from "styled-normalize";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
