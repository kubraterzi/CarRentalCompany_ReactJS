import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";

import "react-slideshow-image/dist/styles.css";

import "./styles/main.css";
import "./styles/sign.css";
import "./styles/contact.css";
import "./styles/about.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import AuthChecker from "./components/auth/AuthChecker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthChecker>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthChecker>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
