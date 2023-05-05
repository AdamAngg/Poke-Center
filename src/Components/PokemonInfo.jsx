import React from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";

export const PokemonInfo = ({ name }) => {
  return (
    <div className="pokemoninfo-container">
      <h1>{capitalizeFirstLetter(name)}</h1>
    </div>
  );
};
