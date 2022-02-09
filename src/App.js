import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

function App() {
  return (
    <div className="App">
      <header className="App-header p-3 container text-light">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
