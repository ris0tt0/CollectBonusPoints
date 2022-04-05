import Logger from "js-logger";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "./index.css";

Logger.useDefaults();

ReactDOM.render(<App />, document.getElementById("g-collect"));
