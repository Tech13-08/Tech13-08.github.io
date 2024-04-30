import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { TerminalContextProvider } from "react-terminal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <TerminalContextProvider>
        <App />
      </TerminalContextProvider>
    </Router>
  </React.StrictMode>
);
