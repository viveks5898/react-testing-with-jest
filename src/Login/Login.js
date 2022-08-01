import axios from "axios";
import React from "react";
import { useState } from "react";
export const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({})
  console.log(user)
  const handleCLick = async (e) => {
    e.preventDefault();
    try {
      const data = axios.get("https://jsonplaceholder.typicode.com/users/1")
      setUser(data)
    } catch {}
     setError(true)
     
  };

  return (
    <div>
      <h1>Login Form test</h1>
      <form style={{ marginTop: "50px", padding: "20px" }}>
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
        <input
          type="password"
          style={{ margin: "10px" }}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={handleCLick}
          disabled={!username || !password}
          type="submit"
        >
          Login
        </button>
        <span>{error ? <>something went wrong </> : null} </span>
      </form>
    </div>
  );
};
