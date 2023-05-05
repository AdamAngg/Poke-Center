import React from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";

export const PokemnonRow = ({ pokemonCurrent, onSelect }) => {
  return (
    <li className="pokemon">
      <figure
        key={pokemonCurrent.name}
        className={"pokemon-preview pokemon-preview__"}
      >
        <img className="pokemon-img" alt="" />
      </figure>
      <p className="pokemon-name">
        {capitalizeFirstLetter(pokemonCurrent.name)}
      </p>

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
