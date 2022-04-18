import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as StateManagementProvider } from "react-redux";
import store from "./store";
import "./bootstrap/bootstrap.css";
import { BrowserRouter as Router,Route,Routes  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateManagementProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </StateManagementProvider>
  </React.StrictMode>
);
