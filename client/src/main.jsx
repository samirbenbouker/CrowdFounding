import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"

import { StateContextProvider } from "./context"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <ThirdwebProvider activeChain={ChainId.Localhost} clientId="762b67ac6a6c4d41bdb01e88f02280c8" >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
