import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App
      outerDivWidth={"200px"}
      outerDivHeight={"200px"}
      outerDivBorderRadius={"10px"}
      outlineHeight={"256px"}
      outlineWidth={"128px"}
      outlineThickness={"6px"}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
