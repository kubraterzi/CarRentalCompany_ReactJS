import React from "react";

import { useFormik } from "formik";

import validationSchema from "./validations/loginValidations";

const Login = () => {
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div className="user_forms-login" id="user_forms-login">
      <h2 className="forms_title">Login</h2>
      <form className="forms_form" onSubmit={handleSubmit}>
        <fieldset className="forms_fieldset">
          <div className="forms_field">
            <input
              type="email"
              placeholder="Email"
              className="forms_field-input"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className="input-error-message">{errors.email}</div>
            )}
          </div>
          <div className="forms_field">
            <input
              type="password"
              placeholder="Password"
              className="forms_field-input"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="input-error-message">{errors.password}</div>
            )}
          </div>
        </fieldset>
        <div className="forms_buttons">
          <button type="button" className="forms_buttons-forgot">
            Forgot password?
          </button>
          <input
            type="submit"
            value="Log In"
            className="forms_buttons-action"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
