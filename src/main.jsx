import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);
