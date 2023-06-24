import React, { useState } from "react";

function App() {
  setInterval(showTime, 1000);

  const time = new Date().toLocaleTimeString("en-GB");
  const [currentTime, setTime] = useState(time);

  function showTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    return setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
