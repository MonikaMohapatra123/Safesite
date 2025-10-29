import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Simple authentication
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/admin"); // Redirect to Admin Panel
    } else {
      setError("Invalid credentials! Use username: admin, password: admin");
    }
  };

  // ✅ Always clear session when page reloads or user leaves
  useEffect(() => {
    const clearSession = () => sessionStorage.removeItem("isLoggedIn");
    window.addEventListener("beforeunload", clearSession);
    return () => window.removeEventListener("beforeunload", clearSession);
  }, []);

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
