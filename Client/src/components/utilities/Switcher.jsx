import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";

const Switcher = () => {
  return (
    <FormControl component="fieldset" sx={{ marginLeft: "2rem" }}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Switch color="secondary" />}
          label="Rentable"
          labelPlacement="end"
          sx={{ color: "#222222" }}
        />
      </FormGroup>
    </FormControl>
  );
};

export default Switcher;
