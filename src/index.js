import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as StateManagementProvider } from "react-redux";
import store from "./store";
import "./bootstrap/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateManagementProvider store={store}>
      <App />
    </StateManagementProvider>
  </React.StrictMode>
);
