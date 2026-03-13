import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login, saveSession } from "../services/authService";
import "../index.css";

function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleLogin = (e) => {

    e.preventDefault();

    if (!captchaValue) {

      Swal.fire({
        icon: "warning",
        title: "Captcha requerido",
        text: "Por favor valida el captcha",
      });

      return;

    }

    if (!login(email, password)) {

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrecto",
      });

      return;

    }

    saveSession();

    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: "Inicio de sesión exitoso",
      timer: 1500,
      showConfirmButton: false,
    });

    navigate("/home");

  };

  return (

    <div className="login-wrapper">

      <div className="login-card">

        <h2 className="login-title">Marvel Tech Portal</h2>

        <form className="login-form" onSubmit={handleLogin}>

          <div className="form-group">

            <label>Correo</label>

            <input
              type="email"
              className="login-input"
              placeholder="admin@admin.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="form-group">

            <label>Contraseña</label>

            <input
              type="password"
              className="login-input"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <div className="captcha-container">

            <ReCAPTCHA
              sitekey="6Ld6hIgsAAAAAArMIFHeNDwB89gYAjbbt8JfZRsW"
              onChange={(value) => setCaptchaValue(value)}
            />

          </div>

          <button type="submit" className="login-button">
            Ingresar
          </button>

        </form>

      </div>

    </div>

  );

}

export default LoginPage;