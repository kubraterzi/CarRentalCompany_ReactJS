import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email().required(),

  password: yup
    .string()
    .min(8, "password must be a minimum of 8 characters")
    .required(),

  //   passwordConfirm: yup
  //     .string()
  //     .oneOf([yup.ref("password")])
  //     .required(),
});

export default validations;
