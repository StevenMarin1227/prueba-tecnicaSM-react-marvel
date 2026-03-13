import React, { useEffect, useState } from "react";
import { getCharacters } from "../services/marvelService";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function CharactersPage() {

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {

    try {

      const data = await getCharacters();
      setCharacters(data);

    } catch (error) {

      console.error("Error cargando personajes", error);

    }

  };

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <>
      <div className="characters-wrapper">

        <div className="characters-card">

          {/* BOTÓN CERRAR SESIÓN */}

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
            <button className="logout-button" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>

          <h2 className="characters-title">
            Personajes del Universo Marvel
          </h2>

          <div className="table-responsive">

            <table className="characters-table">

              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Inteligencia</th>
                </tr>
              </thead>

              <tbody>

                {characters.map((char) => (
                  <tr key={char.id}>

                    <td>
                      <img
                        src={char.images.sm}
                        alt={char.name}
                        className="character-thumb"
                      />
                    </td>

                    <td>
                      <Link
                        to={`/characters/${char.id}`}
                        className="character-link"
                      >
                        {char.name}
                      </Link>
                    </td>

                    <td>
                      {char.powerstats.intelligence}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default CharactersPage;