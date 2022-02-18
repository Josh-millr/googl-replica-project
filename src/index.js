import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import ResultContentProvider from "./contexts/ResultContentProvider";

ReactDOM.render(
  <ResultContentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContentProvider>,
  document.getElementById("root")
);
