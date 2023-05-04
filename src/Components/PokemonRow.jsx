import React from "react";
import { useSelector } from "react-redux";

export const PokemnonRow = ({ pokemonCurrent, onSelect }) => {
  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <li className="pokemon">
      <figure
        key={pokemonCurrent.name}
        className={"pokemon-preview pokemon-preview__"}
      >
        <img className="pokemon-img" alt="" />
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
