import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchedPokemon from "./SearchedPokemon";
import PokemonDetails from "./PokemonDetails";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searched/:name" element={<SearchedPokemon />} />
      <Route path="/pokemondetail/:id" element={<PokemonDetails />} />
    </Routes>
  );
}

export default Pages;
