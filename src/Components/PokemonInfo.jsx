import React from "react";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";
import { Slider } from "./Slider";

export const PokemonInfo = ({ name, sprites }) => {
  return (
    <div className="pokemoninfo-container">
      <h1>{capitalizeFirstLetter(name)}</h1>
      <Slider images={sprites.other["official-artwork"]} />
    </div>
  );
};
