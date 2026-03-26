import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <Link to="/about">About Us</Link> | 
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/info">Info</Link>
    </div>
  );
}

export default Home;
