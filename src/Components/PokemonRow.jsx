import React from "react";

const PokemnonRow = ({ pokemon, onSelect }) => {
  return (
    <div className="Pokemon-Container">
      <p>{pokemon.name}</p>
      <button onClick={() => onSelect(pokemon)}>Select</button>
    </div>
  );
};
export default PokemnonRow;
