import React from "react";
import Navbar from "./bars/Navbar";

const Sign = () => {
  const [currentForm, setCurrentForm] = React.useState("loginForm");
  const handleSignUp = (e) => {
    const userForms = document.getElementById("user_options-forms");
    userForms?.classList.remove("bounceRight");
    userForms?.classList.add("bounceLeft");
    setCurrentForm("signupForm");
  };
  const handleSignIn = (e) => {
    const userForms = document.getElementById("user_options-forms");
    userForms?.classList.remove("bounceLeft");
    userForms?.classList.add("bounceRight");
    setCurrentForm("loginForm");
  };
  return (
    <>
      <Navbar />
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">
                Don't have an account?
              </h2>
              <p className="user_unregistered-text">
                Banjo tote bag bicycle rights, High Life sartorial cray craft
                beer whatever street art fap.
              </p>
              <button
                className="user_unregistered-signup"
                id="signup-button"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text">
                Banjo tote bag bicycle rights, High Life sartorial cray craft
                beer whatever street art fap.
              </p>
              <button
                className="user_registered-login"
                id="login-button"
                onClick={handleSignIn}
              >
                Login
              </button>
            </div>
          </div>

          <div className="user_options-forms" id="user_options-forms">
            {currentForm === "loginForm" && (
              <div className="user_forms-login" id="user_forms-login">
                <h2 className="forms_title">Login</h2>
                <form className="forms_form">
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        className="forms_field-input"
                        required
                        autoFocus
                      />
                    </div>
                    <div className="forms_field">
                      <input
                        type="password"
                        placeholder="Password"
                        className="forms_field-input"
                        required
                      />
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
            )}
            {currentForm === "signupForm" && (
              <div className="user_forms-signup">
                <h2 className="forms_title">Sign Up</h2>
                <form className="forms_form">
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="forms_field-input"
                        required
                      />
                    </div>
                    <div className="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        className="forms_field-input"
                        required
                      />
                    </div>
                    <div className="forms_field">
                      <input
                        type="password"
                        placeholder="Password"
                        className="forms_field-input"
                        required
                      />
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
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign;
