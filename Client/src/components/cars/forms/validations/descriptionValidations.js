import * as yup from "yup";

const validations = yup.object().shape({
  passengerCapacity: yup.string().required("passenger capacity is required"),
  loadCapacity: yup.string().required("load capacity is required"),
  fuelType: yup.string().required("fuel type is required"),
});

export default validations;
