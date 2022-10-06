import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Search = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000
    `);
    const data = await api.json();

    setPokemonData(data.results);
    console.log(pokemonData);
  };

  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
    let matches = [];
    console.log(pokemonData);
    if (searchValue.length > 0) {
      matches = pokemonData
        .filter((pokemon) => pokemon.name.includes(searchValue))
        .map((pokemon) => pokemon.name);
    }
    console.log(matches);
    setSuggestions(matches);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchValue);
    setSearchValue("");
    setSuggestions([]);
  };
  const suggestHandler = (text) => {
    setSearchValue(text);
  };
  return (
    <div>
      <SearchContainer>
        <h2>Search Pokemon By Name</h2>
        <SearchInner>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            type="submit"
            onClick={(e) => {
              handleButtonClick(e);
            }}
          >
            Search
          </button>
        </SearchInner>
        <SearchSuggestions>
          {suggestions &&
            suggestions.map((suggestion, i) => {
              return (
                <div key={i} onClick={() => suggestHandler(suggestion)}>
                  {suggestion}{" "}
                </div>
              );
            })}
        </SearchSuggestions>
      </SearchContainer>
    </div>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem;
  border: none;
  padding: 2rem;
  h2 {
    color: #817878;
  }
`;
const SearchInner = styled.div`
  display: flex;

  input {
    padding: 0.5rem 1rem;
    border: 1px solid #b6a9a9;
    border-radius: 0.2rem;
    margin: 1rem 1rem 0rem;
    width: 10rem;
    height: auto;
  }
  button {
    color: white;
    background-color: #18a0a5;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: 1rem;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
  }
`;
const SearchSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1px solid #b6a9a9;

  height: auto;
  max-height: 10rem;
  overflow-y: scroll;
  cursor: pointer;
  margin: 0rem 1rem;
  width: 12rem;
  div {
    border: 0.1px solid #f8efef;
    padding: 0.5rem 1rem;

    &:hover {
      background-color: #ebe4e4;
    }
  }
`;

export default Search;
