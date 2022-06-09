import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuizcontextProvider } from "./context/quiz-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizcontextProvider>
        <App />
      </QuizcontextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
