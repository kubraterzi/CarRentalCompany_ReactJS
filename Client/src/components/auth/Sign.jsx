import React from "react";
import Navbar from "../bars/Navbar";
import Login from "./Login";
import Register from "./Register";

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
              <h2 className="user_unregistered-title" style={{ color: "#ccc" }}>
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
            {currentForm === "loginForm" ? <Login /> : <Register />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign;
