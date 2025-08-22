/**
 * Application Entry Point - WAT.ai Website
 * Initializes React app with global styles and strict mode
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Global CSS is temporarily disabled to prevent render blocking
// Critical styles are inlined in index.html for immediate rendering
// TODO: Re-enable global.css loading after performance optimization
// import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
