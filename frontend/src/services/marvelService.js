import axios from "axios";

const API_URL = "http://localhost:3000/api/characters";

export const getCharacters = async () => {

  const response = await axios.get(API_URL);

  return response.data;

};

export const getCharacterById = async (id) => {

  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;

};