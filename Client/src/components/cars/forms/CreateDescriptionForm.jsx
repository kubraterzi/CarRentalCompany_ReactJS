import React from "react";
import { useFormik } from "formik";

import validationSchema from "./validations/descriptionValidations";

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const passengerCapacities = [
  "1 Adult",
  "2 Adult",
  "3 Adult",
  "4 Adult",
  "5 Adult",
];

const loadCapacities = ["1 Suitcase", "2 Suitcase", "3 Suitcase", "4 Suitcase"];

const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Other"];

const CreateDescriptionForm = (props) => {
  const mergeDescriptionProps = () => {
    props.handleClose();
    console.log(values);
    const description = `${values.passengerCapacity} - ${values.loadCapacity} - ${values.fuelType}`;
    props.setCarDescription(description);
  };

  console.log(props.currentCarDescription);

  const { handleChange, handleBlur, touched, values, errors } = useFormik({
    initialValues: {
      passengerCapacity: props.currentCarDescription.passengerCapacity ?? "",
      loadCapacity: props.currentCarDescription?.loadCapacity ?? "",
      fuelType: props.currentCarDescription?.fuelType ?? "",
    },
    onSubmit: (values) => {
      console.log(values);
      // props.setCarDescription();
    },
    validationSchema,
  });

  console.log(values);

  return (
    <div>
      <DialogTitle>Fill the form</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel htmlFor="demo-dialog-select-label">
              Passenger Capacity
            </InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              name="passengerCapacity"
              value={values.passengerCapacity}
              onChange={handleChange}
              onBlur={handleBlur}
              input={<OutlinedInput label="Passenger Capacity" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {passengerCapacities.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {errors.passengerCapacity && touched.passengerCapacity && (
              <div className="input-error-message">
                {errors.passengerCapacity}
              </div>
            )}
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-dialog-select-label">Load Capacity</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              name="loadCapacity"
              value={values.loadCapacity}
              onChange={handleChange}
              onBlur={handleBlur}
              input={<OutlinedInput label="Load Capacity" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {loadCapacities.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {errors.loadCapacity && touched.loadCapacity && (
              <div className="input-error-message">{errors.loadCapacity}</div>
            )}
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-dialog-select-label">Fuel Type</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              name="fuelType"
              value={values.fuelType}
              onChange={handleChange}
              onBlur={handleBlur}
              input={<OutlinedInput label="Fuel Type" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {fuelTypes.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {errors.fuelType && touched.fuelType && (
              <div className="input-error-message">{errors.fuelType}</div>
            )}
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button type="submit" onClick={mergeDescriptionProps}>
          Create
        </Button>
      </DialogActions>
    </div>
  );
};

export default CreateDescriptionForm;
