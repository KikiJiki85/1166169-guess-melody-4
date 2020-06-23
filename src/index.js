import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/question.js";

const Settings = {
  ERRORS_COUNT: 4
};

ReactDOM.render(
    <App
      errorsCount = {Settings.ERRORS_COUNT}
      questions = {questions}
    />,
    document.querySelector(`#root`)
);
