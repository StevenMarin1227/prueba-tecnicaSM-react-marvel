import axios from "axios";

const BASE_URL = "https://akabab.github.io/superhero-api/api";

export const getCharacters = async () => {

  const response = await axios.get(`${BASE_URL}/all.json`);

  //parametro de limitarlo solo a 30 personajes
  return response.data.slice(0, 30);

};

export const getCharacterById = async (id) => {

  const response = await axios.get(`${BASE_URL}/id/${id}.json`);

  return response.data;

};