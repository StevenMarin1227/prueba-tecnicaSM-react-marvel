import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import charactersRouter from "./routes/characters.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/characters", charactersRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});