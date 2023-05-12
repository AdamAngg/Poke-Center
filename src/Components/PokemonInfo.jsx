import React from "react";
import { Slider } from "./Slider";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";

export const PokemonInfo = ({ name, sprites, id, types }) => {
  return (
    <div className="pokemoninfo-container">
      <Slider
        images={sprites.other["official-artwork"]}
        key={id}
        type={types[0]?.type?.name}
      />
      <div className="titles">
        <h3>{capitalizeFirstLetter(name)}</h3>
      </div>
    </div>
  );
};
