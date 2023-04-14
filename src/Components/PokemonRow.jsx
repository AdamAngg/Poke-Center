import React from "react";
const PokemnonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name}</td>
    {/* <td>{pokemon.type.join("/")}</td> */}
    <td>
      <button onClick={() => onSelect(pokemon)}>Select</button>
    </td>
  </tr>
);
export default PokemnonRow;
