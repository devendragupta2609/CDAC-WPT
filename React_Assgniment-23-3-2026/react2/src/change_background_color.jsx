import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("cyan");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <h1>Background Color Changer</h1>

      <div>
        <button onClick={() => setBgColor("red")}>Red</button>
        <button onClick={() => setBgColor("yellow")}>Yellow</button>
        <button onClick={() => setBgColor("green")}>Green</button>
        <button onClick={() => setBgColor("blue")}>Blue</button>
        <button onClick={() => setBgColor("orange")}>Orange</button>
      </div>
    </div>
  );
}

export default App;