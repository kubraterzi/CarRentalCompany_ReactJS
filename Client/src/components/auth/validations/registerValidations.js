import * as yup from "yup";

const validations = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "first name must be a minimum of 2 characters")
    .required(),

  lastName: yup
    .string()
    .min(2, "last name must be a minimum of 2 characters")
    .required(),

  email: yup.string().email().required(),

  password: yup
    .string()
    .min(8, "password must be a minimum of 8 characters")
    .required(),
});

export default validations;
