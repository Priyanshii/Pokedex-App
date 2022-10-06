import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  console.log(props);
  const { id, name } = props;
  const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div>
      <Card>
        <Link to={"/pokemondetail/" + id}>
          <ImageCard>
            <img src={imgLink} alt={name} />
          </ImageCard>
          <p>{name}</p>
          <p>{id}</p>
        </Link>
      </Card>
    </div>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  width: 18rem;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  a {
    text-decoration: none;
  }
  p {
    text-align: center;
    font-size: 1rem;
    padding: 0.1rem;
    text-transform: uppercase;
    color: rgb(56, 93, 84);
    font-weight: 500;
  }
`;
const ImageCard = styled.div`
  width: 100%;
  flex-basis: 70%;
  background-color: #f5ebeb;
  display: flex;
  justify-content: center;
  img {
    width: 50%;
  }
`;
export default PokemonCard;
