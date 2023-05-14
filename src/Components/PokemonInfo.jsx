import React from "react";
import { Slider } from "./Slider";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter.helper";

export const PokemonInfo = ({ name, sprites, id, types, stats, japanName }) => {
  return (
    <div className="pokemoninfo-container">
      <Slider
        images={sprites.other["official-artwork"]}
        key={id}
        types={types}
        id={id}
        stats={stats}
      />
      <div className="titles">
        <h3>{capitalizeFirstLetter(name)}</h3>
        <h4>{japanName?.names[0]?.name}</h4>
      </div>
      <div className="types">
        <button></button>
      </div>
    </div>
  );
};
