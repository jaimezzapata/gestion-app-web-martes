import "./Login.css";
import { usuarios } from "../../../database/database";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
let apiUsuarios = "http://localhost:5174/usuarios";

const Login = () => {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");
  let redirecion = useNavigate();

  async function getUsuarios() {
    let data = await fetch(apiUsuarios);
    console.log(data);
  }

  getUsuarios();

  const buscarUsuario = () => {
    let estado = usuarios.some(
      (usuario) =>
        getUsername === usuario.user && getPassword === usuario.password
    );
    return estado;
  };

  function iniciarSesion() {
    if (buscarUsuario()) {
      setTimeout(() => {
        redirecion("/panel");
      }, 3000);
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
