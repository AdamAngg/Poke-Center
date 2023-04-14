import React from "react";
import PokemnonRow from "./PokemonRow";
const PokemonTable = ({ filter, pokemon, selectedItemSet }) => (
  <div>
    <table width={"100%"}>
      <thead>
        <tr>
          <th>Pokemon</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((pokemon) => pokemon.name.toLowerCase().includes(filter))
          .slice(0, 20)
          .map((pokemon) => (
            <PokemnonRow
              pokemon={pokemon}
              key={pokemon.name + 151}
              onSelect={(pokemon) => selectedItemSet(pokemon)}
            />
          ))}
      </tbody>
    </table>
  </div>
);
export default PokemonTable;
