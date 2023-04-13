import React from "react";

const PokemonFilter = ({ filter, filterSet }) => (
  <input value={filter} onChange={(evt) => filterSet(evt.target.value)} />
);
export default PokemonFilter;
