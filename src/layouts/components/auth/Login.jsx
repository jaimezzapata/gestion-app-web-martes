import "./Login.css";
import { usuarios } from "../../../database/database";
import { useState } from "react";

const Login = () => {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");
  const buscarUsuario = () => {
    let estado = usuarios.some(
      (usuario) =>
        getUsername === usuario.user && getPassword === usuario.password
    );
    return estado;
  };
  function iniciarSesion() {
    if (buscarUsuario()) {
      console.log("Credenciales correctas");
    } else {
      console.log("Credenciales erroneas");
    }
  }
  return (
    <form className="login-form">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          id="password"
        />
      </div>
      <button onClick={iniciarSesion} type="button">
        Login
      </button>
    </form>
  );
};

export default Login;
