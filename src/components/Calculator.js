import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

import "./Calculator.scss";

const Calculator = () => {
  return (
    <div className="calculator">
      <header className="calculator-header">
        <h1>Mortgage Calculator</h1>
        <Stack spacing={2}>
          <TextField
            label="Annual Household Income(before taxes)"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Monthly debts(credit cards, loans, etc.)"
            variant="outlined"
          />
          <TextField label="Down payment" variant="outlined" />
          <TextField label="Loan term" variant="outlined" />
          <TextField label="Annual Income" variant="outlined" color="success" />
          <TextField label="Annual Income" variant="outlined" />
          <TextField label="Annual Income" variant="outlined" />
          <TextField label="Annual Income" variant="outlined" />
          <TextField label="Annual Income" variant="outlined" />

          <TextField label="Monthly payment" variant="standard" />
        </Stack>
      </header>
    </div>
  );
};

export default Calculator;
