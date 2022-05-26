import * as yup from "yup";

const validations = yup.object().shape({
  brand: yup.string().required("brand is required"),

  brandModel: yup
    .string()
    .min(2, "last name must be a minimum of 2 characters")
    .required("brand model is required"),

  color: yup.string().required("color is required"),

  modelYear: yup
    .string()
    // .matches(
    //   /(19)[89][0 - 9] | (20)[0 - 4][0 - 9] | 2050/,
    //   "model year must be between 1970 and 2050"
    // )
    .min(4, "model year must be a minimum of 4 characters")
    .max(4, "model year must be a minimum of 4 characters")
    .required("model year is required"),

  dailyPrice: yup
    .number()
    .typeError("daily price must be a number")
    .required("daily price is required"),
});

export default validations;
