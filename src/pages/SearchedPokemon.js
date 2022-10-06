import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import PokemonCard from "../components/PokemonCard";

function SearchedPokemon() {
  const [searchedPokemon, setSearchedPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    console.log(params);
    getPokemon(params.name);
  }, [params.name]);

  const getPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    console.log(data);
    setSearchedPokemon(data);
  };

  return (
    <Content>
      <PokemonCard {...searchedPokemon} />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SearchedPokemon;
