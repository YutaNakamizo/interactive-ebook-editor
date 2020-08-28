import React from "react";
import { render as renderToDom } from "react-dom";

const render = () => {
  const { App } = require("@/App");
  renderToDom(<App />, document.getElementById("app"));
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", render);
}
