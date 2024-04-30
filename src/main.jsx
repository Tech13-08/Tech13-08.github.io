import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TerminalContextProvider } from "react-terminal";
import { Layout } from "./pages/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <TerminalContextProvider>
                <App />
              </TerminalContextProvider>
            }
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
