import React from "react";
import { useSelector } from "react-redux";

export const PokemnonRow = ({ pokemonCurrent, onSelect }) => {
  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const searchPokemon = useSelector(
    (state) => state.pokemonReducer.searchPokemon
  );

  const pokemonArrayOfColors = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonColor
  );

  const pokemonID = pokemon
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchPokemon))
    .slice(0, 20)
    .indexOf(pokemonCurrent, 0);

  const pokemonFotoArray = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonFoto
  );

  return (
    <li className="pokemon">
      <figure
        key={pokemonCurrent.name}
        className={
          "pokemon-preview pokemon-preview__" + pokemonArrayOfColors[pokemonID]
        }
      >
        <img src={pokemonFotoArray[pokemonID]} className="pokemon-img" alt="" />
      </figure>
      <p className="pokemon-name">{capitalizeWord(pokemonCurrent.name)}</p>

      <button
        className="pokemon-btn"
        onClick={() => {
          onSelect(pokemonCurrent);
        }}
      >
        Select
      </button>
    </li>
  );
};
