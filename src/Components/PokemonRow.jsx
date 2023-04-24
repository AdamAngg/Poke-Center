import React from "react";

const PokemnonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </td>
    </tr>
  );
};
export default PokemnonRow;
