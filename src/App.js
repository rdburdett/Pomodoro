import React, { useState } from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
import SplatScore from "./pomodoro/components/SplatScore";
import {ReactComponent as TomatoPic} from './images/533-tomato.svg';

function App() {
  const [splatScore, setSplatScore] = useState(0)

  function splatCountHandler() {
    setSplatScore(splatScore+1)
  }

  return (
    <div className="App">
      <header className="App-header p-3 container text-light mb-2">
        {/* <h1>Pomodoro Timer</h1> */}
        <div className="mx-auto tomato-pic d-flex flex-row justify-content-center">
          <TomatoPic />
        </div>
        <h1>Pomodoro Timer</h1>
        <SplatScore splatScore={splatScore} />
      </header>
      <div className="container">
        <Pomodoro splatCountHandler={splatCountHandler} />
      </div>
    </div>
  );
}

export default App;
