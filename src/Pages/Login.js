import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/Users";

function Login() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    login(user)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Login Failed!!");
      });
  };
  return (
    <div>
      <div>
        <div>
          <label>{error}</label>
          <br></br>

          <input value={user} onChange={(evt) => setUser(evt.target.value)} />
          <br></br>

          <input placeholder="Password" />
          <br></br>

          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
