import express from "express";
import { getCharacters, getCharacterById } from "../services/marvelService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const characters = await getCharacters();
    res.json(characters);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Error al cargar personajes" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const character = await getCharacterById(req.params.id);
    res.json(character);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Error al cargar personajes" });
  }
});

export default router;