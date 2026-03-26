import React, { useState } from "react";

function Login({ setDev }) {
  const [dev, setLocalDev] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (dev === "iet" && password === "iet") {
      setDev(dev);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setLocalDev(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
