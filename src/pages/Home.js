import { useEffect, useState } from "react";
import styled from "styled-components";
import React from "react";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [CurrentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPokemonData([]);
    getPokemonData();
  }, [pageNumber]);

  console.log(pageNumber);

  const getPokemonData = async () => {
    const api = await fetch(CurrentPageUrl);
    const data = await api.json();

    setCurrentPageUrl(data.next);
    createPokemonObject(data.results);
    // console.log(data);
  };
  const createPokemonObject = async (pokemonList) => {
    pokemonList.forEach(async (pokemon) => {
      const response = await fetch(`${pokemon.url}`);
      const data = await response.json();

      setPokemonData((state) => {
        return [...state, data];
      });
    });
  };

  const handlerNextPage = () => {
    setPageNumber((state) => {
      return state + 1;
    });
  };

  const pokemonList = pokemonData.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <PokemonCard {...item} />
      </React.Fragment>
    );
  });

  return (
    <Container>
      <Grid>{pokemonList}</Grid>
      <Button onClick={() => handlerNextPage()}>Go to Next Page</Button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 17rem);
  grid-gap: 3rem;
`;
const Button = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 10rem;
  text-align: center;
  font-size: 1rem;
  background-color: #18a0a5;
  margin: 2rem;
  color: #e7eef1;
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`;
export default Home;
