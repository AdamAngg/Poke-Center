import React from "react";

const PokemnonRow = ({ pokemon, onSelect }) => {
  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <ul className="pokemon-container">
      <li>
        <p>{capitalizeWord(pokemon.name)}</p>
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </li>
    </ul>
  );
};
export default PokemnonRow;
