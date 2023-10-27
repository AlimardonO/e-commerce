import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import './index.css'
const main = ReactDOMClient.createRoot(document.querySelector("#root"));
main.render(<App />);