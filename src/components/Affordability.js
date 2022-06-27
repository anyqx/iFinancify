import React from "react";
import {
  Box,
  Stack,
  Switch,
  TextField,
  InputAdornment,
} from "@mui/material";

const Affordability = () => {
  return (
    <Stack spacing={2}>
      <TextField
        label="Annual household income (before taxes)"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="Monthly debts (credit cards, loans, etc.)"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="Down payment"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <Stack direction="row" spacing={2}>
        <Box FullWidth sx={{ width: "50%" }}>
          <TextField
            label="Loan term"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">yrs</InputAdornment>,
            }}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            label="Interest"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Box>
      </Stack>
      Mortgage amount <br />
      purchase budget <br />
      monthly mortgage payment <br />
      switch include taxes and fees
      <br />
      <TextField
        label="Annual property tax"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="Annual property insurance"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="Monthly PMI (private mortgage insurance)"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="Monthly HOA fee"
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      Monthly mortgage payment = <br />
      PIMI = <br />
      amortization schedule
    </Stack>
  );
};

export default Affordability;
