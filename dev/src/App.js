import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Info from "./Info";

function App() {
  const [dev, setDev] = useState("");

  return (
    <BrowserRouter>
      {dev === "" ? (
        <Login setDev={setDev} />
      ) : (
        <>
          <h2>Hello {dev}</h2>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About dev={dev} />} />
            <Route path="/contact" element={<Contact dev={dev} />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
