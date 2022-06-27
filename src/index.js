import React from "react";
import ReactDOM from "react-dom/client";
import MortgageCalculator from "./components/MortgageCalculator";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MortgageCalculator />
  </React.StrictMode>
);
