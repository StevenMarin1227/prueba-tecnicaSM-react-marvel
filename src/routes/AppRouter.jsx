import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";
import CharacterDetailPage from "../pages/CharacterDetailPage";

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/characters" element={<CharactersPage />} />

        <Route path="/characters/:id" element={<CharacterDetailPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;