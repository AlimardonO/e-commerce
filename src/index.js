import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import './index.css'
const main = ReactDOMClient.createRoot(document.querySelector("#main"));
main.render(<App/>);