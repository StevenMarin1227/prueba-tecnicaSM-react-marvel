import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container py-5">

      <h1>Bienvenido</h1>
      <p>Has iniciado sesión correctamente.</p>

      <Link to="/characters" className="btn btn-success">
        Ver Personajes Marvel
      </Link>

    </div>
  );
}

export default HomePage;