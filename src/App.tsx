import React from "react";
import Quiz from "./components/Quiz";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Simple Quiz App</h1>
      <Quiz />
    </div>
  );
};

export default App;
