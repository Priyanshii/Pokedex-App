import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

const PokemonDetails = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    console.log(params);
    getPokemon(params.id);
  }, [params]);

  const getPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    console.log(data);
    setDetails(data);
  };
  if (!details.id) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Container>
      <img src={details["sprites"]["front_default"]} alt={details.name} />
      <AdditionalInfo>
        <Detail>
          <h4>Name: </h4>
          <span> {details.name}</span>
        </Detail>
        <Detail>
          <h4>Height: </h4>
          <span> {details.height}</span>
        </Detail>
        <Detail>
          <h4>Weight: </h4>
          <span> {details.weight}</span>
        </Detail>
        <Detail>
          <h4>Abilities: </h4>
          <div>
            {details.abilities.map((item, index) => {
              return <p>{item.ability["name"]}</p>;
            })}
          </div>
        </Detail>
        <Detail>
          <h4>Moves: </h4>
          <div>
            {details.moves.map((item) => {
              return <p>{item.move["name"]} </p>;
            })}
          </div>
        </Detail>
        <Detail>
          <h4>Stats: </h4>
          <div>
            {details.stats.map((item) => {
              return <p>{item.stat["name"]} </p>;
            })}
          </div>{" "}
        </Detail>
      </AdditionalInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  img {
    width: 50%;
    height: auto;
    object-fit: cover;
  }
`;
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid transparent;
  box-shadow: 0px 2px 2px 2px rgb(25, 25, 25, 0.2);
  width: 50%;
  height: auto;
  max-height: 10rem;
  overflow: auto;

  h4 {
    color: rgb(22, 55, 125);
    padding-right: 1rem;
  }
  span {
    font-size: 16px;
  }
`;
export default PokemonDetails;
