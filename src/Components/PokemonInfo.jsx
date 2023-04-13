import React from "react";
const PokemonInfo = ({ name: { english }, base }) => (
  <div>
    <h1>{english}</h1>
    {Object.keys(base).map((e) => (
      <p key={e}>
        {e}: {base[e]}
      </p>
    ))}
  </div>
);
export default PokemonInfo;
