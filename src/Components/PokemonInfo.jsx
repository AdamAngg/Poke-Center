import React from "react";
import { Slider } from "./Slider";

export const PokemonInfo = ({ name, sprites, id, types }) => {
  return (
    <div className="pokemoninfo-container">
      <Slider
        images={sprites.other["official-artwork"]}
        name={name}
        key={id}
        type={types[0]?.type?.name}
      />
    </div>
  );
};
