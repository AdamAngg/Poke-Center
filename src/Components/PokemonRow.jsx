import React from "react";
import { useSelector } from "react-redux";

const PokemnonRow = ({ pokemonCurrent, onSelect }) => {
  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const pokemonArrayOfColors = useSelector(
    (state) => state?.pokemonInfoReducer?.pokemonColor
  );
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);
  const colorBelonging = pokemon.indexOf(pokemonCurrent, 0);

  return (
    <li className="pokemon">
      <figure
        key={pokemonCurrent.name}
        className={
          "pokemon-preview pokemon-preview__" +
          pokemonArrayOfColors[colorBelonging]
        }
      >
        <img src="" alt="" />
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
export default PokemnonRow;
