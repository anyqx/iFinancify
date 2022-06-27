import React from "react";
import { Grid } from "@mui/material";

import Affordability from "./Affordability";

import "./MortgageCalculator.scss";

const MortgageCalculator = () => {
  return (
    <div className="calculator">
      <h1>Mortgage Calculator</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Affordability />
        </Grid>
        <Grid item sx={6}></Grid>
      </Grid>
    </div>
  );
};

export default MortgageCalculator;
