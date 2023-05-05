import React from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";

export const PokemnonRow = ({ pokemon, onSelect }) => {
  return (
    <li className="pokemon">
      <figure
        key={pokemon.name}
        className={
          "pokemon-preview pokemon-preview__" + pokemon.types[0].type.name
        }
      >
        <img
          src={pokemon.sprites.front_default}
          className="pokemon-img"
          alt={pokemon.name + "Look from up front"}
        />
      </figure>
      <p className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</p>

      <button
        className="pokemon-btn"
        onClick={() => {
          onSelect(pokemon.name);
        }}
      >
        Select
      </button>
    </li>
  );
};
