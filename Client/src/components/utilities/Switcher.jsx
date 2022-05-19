import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";

import { setCurrentStatus } from "../../redux/slices/statuses/statusesSlice";

const Switcher = () => {
  const dispatch = useDispatch();
  const [isRentable, setIsRentable] = React.useState(false);

  const toggleStatus = (event) => {
    setIsRentable(event.target.checked);
  };

  useEffect(() => {
    isRentable ? dispatch(setCurrentStatus(2)) : dispatch(setCurrentStatus(1));
  }, [isRentable]);

  return (
    <FormControl component="fieldset" sx={{ marginLeft: "2rem" }}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Switch color="secondary" />}
          label="Rentable"
          labelPlacement="end"
          sx={{ color: "#222222" }}
          onChange={toggleStatus}
        />
      </FormGroup>
    </FormControl>
  );
};

export default Switcher;
