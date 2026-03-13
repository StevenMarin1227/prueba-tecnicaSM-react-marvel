import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterById } from "../services/marvelService";

function CharacterDetailPage() {

  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {

    const loadCharacter = async () => {
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error cargando personaje", error);
      }
    };

    loadCharacter();

  }, [id]);

  if (!character) {
    return (
      <div className="container py-5 text-light">
        Cargando personaje...
      </div>
    );
  }

  return (
    <div className="detail-wrapper">

      <div className="detail-card">

        <h2 className="detail-title">{character.name}</h2>

        <img
          src={character.images?.lg}
          alt={character.name}
          className="detail-image"
        />

        <div className="stats-box">

          <div className="stat-row">
            <span>Inteligencia</span>
            <strong>{character.powerstats.intelligence}</strong>
          </div>

          <div className="stat-row">
            <span>Fuerza</span>
            <strong>{character.powerstats.strength}</strong>
          </div>

          <div className="stat-row">
            <span>Velocidad</span>
            <strong>{character.powerstats.speed}</strong>
          </div>

          <div className="stat-row">
            <span>Durabilidad</span>
            <strong>{character.powerstats.durability}</strong>
          </div>

          <div className="stat-row">
            <span>Poder</span>
            <strong>{character.powerstats.power}</strong>
          </div>

          <div className="stat-row">
            <span>Combate</span>
            <strong>{character.powerstats.combat}</strong>
          </div>

        </div>

        <Link to="/characters" className="back-button">
          Volver a personajes
        </Link>
      </div>
    </div>
  );
}

export default CharacterDetailPage;