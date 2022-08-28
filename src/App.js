import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";
  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <div style={{ color }} id="value">
          {count}
        </div>
        <div className="btn-group">
          <button
            onClick={() => setCount(count - 1)}
            className="btn btn-decrease"
          >
            DECREASE
          </button>
          <button
            onClick={() => setCount(count - count)}
            className="btn btn-reset"
          >
            RESET
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-increase"
          >
            INCREASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
