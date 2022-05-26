import React from "react";

import { useFormik } from "formik";

import validationSchema from "./validations/registerValidations";

const Register = () => {
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div className="user_forms-signup">
      <h2 className="forms_title">Sign Up</h2>
      <form className="forms_form" onSubmit={handleSubmit}>
        <fieldset className="forms_fieldset">
          <div className="forms_field">
            <input
              type="text"
              placeholder="First Name"
              className="forms_field-input"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && (
              <div className="input-error-message">{errors.lastName}</div>
            )}
          </div>
          <div className="forms_field">
            <input
              type="text"
              placeholder="Full Name"
              className="forms_field-input"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && (
              <div className="input-error-message">{errors.lastName}</div>
            )}
          </div>
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
          <input
            type="submit"
            value="Sign up"
            className="forms_buttons-action"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
