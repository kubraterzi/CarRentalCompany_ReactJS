import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  OutlinedInput,
  InputAdornment,
  Dialog,
} from "@mui/material";
import CreateDescriptionForm from "./CreateDescriptionForm";
import validationSchema from "./validations/carValidations";
import { fetchAllBrands } from "./../../../redux/slices/brands/brandsSlice";
import { fetchAllColors } from "./../../../redux/slices/colors/colorsSlice";

const CarForm = (props) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands.items);
  const colors = useSelector((state) => state.colors.items);

  const [open, setOpen] = React.useState(false);
  const [carDescription, setCarDescription] = React.useState("");
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(fetchAllBrands());
    dispatch(fetchAllColors());
  }, [dispatch]);

  const handleDescriptionFormat = (description) => {
    if (description !== undefined) {
      const descriptionFormat = description.split("-").map((des) => des.trim());
      const newDescription = {
        passengerCapacity: descriptionFormat[0],
        loadCapacity: descriptionFormat[1],
        fuelType: descriptionFormat[2],
      };
      // console.log(newDescription);
      return newDescription;
    } else {
      return "";
    }
  };

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        brand: props.currentCar?.brandName ?? "", // You can use || instead of ??
        brandModel: props.currentCar?.brandModel ?? "",
        color: props.currentCar?.colorName ?? "",
        modelYear: props.currentCar?.modelYear ?? "",
        dailyPrice: props.currentCar?.dailyPrice ?? "",
        description: handleDescriptionFormat(props.currentCar?.description),
      },
      onSubmit: (values) => {
        if (!carDescription) {
          alert("please create a description for this car");
        } else {
          values.description = carDescription;
          // console.log(values);

          props.onClose();
        }
      },
      validationSchema,
    });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="brand-select-label">Brand</InputLabel>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              name="brand"
              label="Brand"
              value={brands.length > 0 ? values.brand : ""}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value="" disabled>
                <em>Select Brand</em>
              </MenuItem>
              {brands.map((brand) => (
                <MenuItem key={brand.brandID} value={brand.brandName}>
                  {brand.brandName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.brand && touched.brand && (
            <div className="input-error-message">{errors.brand}</div>
          )}
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Brand Model"
            variant="outlined"
            name="brandModel"
            value={values.brandModel}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.brandModel && touched.brandModel && (
            <div className="input-error-message">{errors.brandModel}</div>
          )}
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="color-select-label">Color</InputLabel>
            <Select
              labelId="color-select-label"
              id="color-select"
              name="color"
              value={colors.length > 0 ? values.color : ""}
              label="Color"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value="" disabled>
                <em>Select Color</em>
              </MenuItem>
              {colors.map((color) => (
                <MenuItem key={color.colorID} value={color.colorName}>
                  {color.colorName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.color && touched.color && (
            <div className="input-error-message">{errors.color}</div>
          )}
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Model Year"
            variant="outlined"
            name="modelYear"
            value={values.modelYear}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.modelYear && touched.modelYear && (
            <div className="input-error-message">{errors.modelYear}</div>
          )}
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Daily Price
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              name="dailyPrice"
              value={values.dailyPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          {errors.dailyPrice && touched.dailyPrice && (
            <div className="input-error-message">{errors.dailyPrice}</div>
          )}
        </Grid>

        <Grid item xs={4}>
          <Button
            sx={{ mt: 1, color: "#222222", fontWeight: 400 }}
            onClick={handleClickOpen}
          >
            Create a Description
          </Button>
          <Dialog
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
            sx={{ minWidth: 900 }}
          >
            <CreateDescriptionForm
              setCarDescription={setCarDescription}
              handleClose={handleClose}
              currentCarDescription={values.description}
            />
          </Dialog>
        </Grid>

        <Grid item xs={9} sx={{ mt: 5 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              ml: 20,
              width: "70%",
              backgroundColor: "#222222",
              letterSpacing: "3px",
              ":hover": { backgroundColor: "#ccc", color: "#222222" },
            }}
          >
            button
            {/* {props.manipulatingType} */}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CarForm;
