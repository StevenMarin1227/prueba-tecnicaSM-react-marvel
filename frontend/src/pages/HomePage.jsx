import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {

  return (
    <>

      <div className="home-wrapper">

        <div className="home-card">

          <h1 className="home-title">
            Bienvenido
          </h1>

          <p className="home-text">
            Has iniciado sesión correctamente.
          </p>

          <Link
            to="/characters"
            className="home-button"
          >
            Ver Personajes Marvel
          </Link>

        </div>

      </div>

      <Footer />

    </>
  );

}

export default HomePage;